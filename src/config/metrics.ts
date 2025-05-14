import { Registry, Counter, Histogram, Gauge } from 'prom-client';
import { logger } from './logger';

// Create a Registry to register metrics
const register = new Registry();

// HTTP request metrics
const httpRequestDurationMicroseconds = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5],
});

// Active users gauge
const activeUsers = new Gauge({
  name: 'active_users_total',
  help: 'Total number of active users',
});

// Newsletter subscriptions counter
const newsletterSubscriptions = new Counter({
  name: 'newsletter_subscriptions_total',
  help: 'Total number of newsletter subscriptions',
  labelNames: ['status'],
});

// Blog posts counter
const blogPosts = new Counter({
  name: 'blog_posts_total',
  help: 'Total number of blog posts',
  labelNames: ['status'],
});

// Register metrics
register.registerMetric(httpRequestDurationMicroseconds);
register.registerMetric(activeUsers);
register.registerMetric(newsletterSubscriptions);
register.registerMetric(blogPosts);

// Add default metrics (CPU, memory, etc.)
register.setDefaultLabels({
  app: 'blog-api',
});

// Log metrics registration
logger.info('Prometheus metrics registered');

export {
  register,
  httpRequestDurationMicroseconds,
  activeUsers,
  newsletterSubscriptions,
  blogPosts,
}; 