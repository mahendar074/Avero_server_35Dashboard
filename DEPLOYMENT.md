# Deployment Guide for Replit

## One-Click Deployment

This productivity server is ready for immediate deployment on Replit. Follow these steps:

### Step 1: Fork to Replit
1. Go to [Replit](https://replit.com)
2. Create a new Repl by importing this Git repository
3. Choose "Import from GitHub" and paste the repository URL

### Step 2: Automatic Setup
The server will automatically:
- Install all required dependencies
- Compile TypeScript to JavaScript
- Start the production server on port 3000

### Step 3: Access Your API
Your server will be available at:
```
https://your-repl-name.your-username.repl.co
```

## Available Endpoints

### Health Check
```bash
GET /health
```
Response:
```json
{
  "status": "healthy",
  "uptime": 123.45,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Task Management
```bash
# List tasks
GET /api/tasks

# Create task
POST /api/tasks
Content-Type: application/json
{
  "title": "Complete project",
  "description": "Finish the productivity tracker",
  "priority": "high"
}
```

### Time Tracking
```bash
# List time entries
GET /api/time-entries

# Record time entry
POST /api/time-entries
Content-Type: application/json
{
  "project": "Productivity App",
  "task": "Development",
  "hours": 3.5,
  "date": "2024-01-15"
}
```

## Environment Configuration

The server uses these environment variables:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (production)

## Production Features

✅ TypeScript compilation  
✅ Security headers (Helmet)  
✅ CORS enabled  
✅ Error handling  
✅ Health monitoring  
✅ Request logging  
✅ JSON parsing  

## Monitoring

Monitor your server health:
```bash
curl https://your-repl-name.your-username.repl.co/health
```

The health endpoint provides:
- Server status
- Uptime in seconds
- Current timestamp

## Troubleshooting

If the server doesn't start:
1. Check the console logs in Replit
2. Verify all dependencies installed correctly
3. Ensure the build process completed successfully

For support, check the server logs or contact support.