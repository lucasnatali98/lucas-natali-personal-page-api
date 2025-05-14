import { Request, Response, NextFunction } from 'express';
import { httpRequestDurationMicroseconds } from '../../config/metrics';
import { logger } from '../../config/logger';

export const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const route = req.route?.path || req.path;
    const method = req.method;
    const statusCode = res.statusCode;

    httpRequestDurationMicroseconds
      .labels(method, route, statusCode.toString())
      .observe(duration / 1000); // Convert to seconds

    logger.debug('Request metrics collected', {
      method,
      route,
      statusCode,
      duration,
    });
  });

  next();
}; 