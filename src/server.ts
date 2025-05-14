import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import { swaggerSpec } from './config/swagger';
import { metricsMiddleware } from './presentation/middlewares/metrics.middleware';
import { register } from './config/metrics';
import { logger } from './config/logger';
import { sdk } from './config/tracing';

config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(metricsMiddleware);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    logger.error('Error generating metrics', { error });
    res.status(500).end();
  }
});

// Routes
app.use(router);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Unhandled error', { error: err });
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
  logger.info(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
  logger.info(`Metrics available at http://localhost:${PORT}/metrics`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  sdk.shutdown()
    .then(() => {
      logger.info('Tracing terminated');
      process.exit(0);
    })
    .catch((error) => {
      logger.error('Error terminating tracing', { error });
      process.exit(1);
    });
});

export { app }; 