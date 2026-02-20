# Productivity Server

A TypeScript-based Express.js server for productivity tracking and time management.

## Features
hello
- Task management endpoints
- Time tracking functionality
- Health monitoring
- CORS and security middleware
- TypeScript with strict type checking
- Production-ready deployment configuration

## API Endpoints

### Core
- `GET /` - Server information
- `GET /health` - Health check
- `GET /api/status` - API status

### Tasks
- `GET /api/tasks` - List all tasks
- `POST /api/tasks` - Create new task

### Time Tracking
- `GET /api/time-entries` - List time entries
- `POST /api/time-entries` - Create time entry

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. For production deployment:
```bash
npm run serve
```

## Deployment on Replit

This project is configured for one-click deployment on Replit:

1. Fork this repository to your Replit account
2. The server will automatically install dependencies and start
3. Your API will be available at `https://your-repl-name.your-username.repl.co`

The server includes:
- Automatic TypeScript compilation
- Production environment variables
- Health monitoring endpoints
- 24/7 uptime support

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (default: development)

## API Testing

Test the endpoints:

```bash
# Health check
curl https://your-repl-name.your-username.repl.co/health

# Create a task
curl -X POST https://your-repl-name.your-username.repl.co/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","description":"A test task","priority":"high"}'

# Create time entry
curl -X POST https://your-repl-name.your-username.repl.co/api/time-entries \
  -H "Content-Type: application/json" \
  -d '{"project":"Test Project","task":"Development","hours":2,"date":"2024-01-15"}'
```