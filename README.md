# Blog API with Newsletter Functionality

A robust RESTful API for a blog platform with newsletter subscription capabilities, built using Node.js, Express, TypeScript, and Prisma.

## Features

- User authentication and authorization (JWT)
- Blog post management (CRUD operations)
- Newsletter subscription system
- Role-based access control (Admin/User)
- Swagger API documentation
- OpenTelemetry integration for distributed tracing
- Winston logging system
- Comprehensive test suite (Unit, Integration, E2E)

## Tech Stack

- Node.js
- Express
- TypeScript
- Prisma (PostgreSQL)
- JWT for authentication
- Swagger for API documentation
- OpenTelemetry for observability
- Winston for logging
- Vitest for testing
- tsyringe for dependency injection

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- Docker (optional)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blog-api.git
cd blog-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

4. Set up the database:
```bash
npm run prisma:generate
npm run prisma:migrate
```

## Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## API Documentation

Once the application is running, you can access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

## Testing

The project includes a comprehensive test suite:

```bash
# Run all tests
npm test

# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## Observability

### Logging
The application uses Winston for logging. Logs are stored in the `logs` directory:
- `combined.log`: All logs
- `error.log`: Error logs only

### Tracing
OpenTelemetry is configured for distributed tracing. To view traces, you need to set up a tracing backend (e.g., Jaeger) and configure the `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable.

## Project Structure

```
src/
├── config/           # Configuration files
├── domain/          # Domain layer (entities, services)
├── infrastructure/  # Infrastructure layer (repositories, database)
├── presentation/    # Presentation layer (controllers, routes)
└── server.ts        # Application entry point

test/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── e2e/           # End-to-end tests
└── setup.ts       # Test setup
```

## API Endpoints

### Users
- `POST /users/register` - Register a new user
- `POST /users/login` - User login
- `GET /users` - Get all users (Admin only)
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user (Admin only)

### Posts
- `GET /posts` - Get all posts
- `GET /posts/:id` - Get post by ID
- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post
- `GET /posts/author/:authorId` - Get posts by author

### Newsletter
- `POST /newsletter/subscribe` - Subscribe to newsletter
- `POST /newsletter/unsubscribe/:email` - Unsubscribe from newsletter
- `GET /newsletter` - Get all subscriptions (Admin only)
- `GET /newsletter/:email` - Get subscription by email (Admin only)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email your-email@example.com or open an issue in the repository. 