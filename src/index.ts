import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app: Express = express();
const port = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Productivity Server API',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API routes
app.get('/api/status', (req: Request, res: Response) => {
  res.json({
    api: 'productivity-server',
    status: 'active',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Productivity tracking endpoints
app.get('/api/tasks', (req: Request, res: Response) => {
  res.json({
    tasks: [],
    message: 'Task endpoint ready for implementation'
  });
});

app.post('/api/tasks', (req: Request, res: Response) => {
  const { title, description, priority } = req.body;
  
  res.json({
    message: 'Task created',
    task: {
      id: Date.now(),
      title,
      description,
      priority,
      created: new Date().toISOString()
    }
  });
});

// Time tracking endpoints
app.get('/api/time-entries', (req: Request, res: Response) => {
  res.json({
    entries: [],
    message: 'Time tracking endpoint ready'
  });
});

app.post('/api/time-entries', (req: Request, res: Response) => {
  const { project, task, hours, date } = req.body;
  
  res.json({
    message: 'Time entry recorded',
    entry: {
      id: Date.now(),
      project,
      task,
      hours,
      date,
      created: new Date().toISOString()
    }
  });
});

// Error handling
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Productivity Server running on port ${port}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🕐 Started at: ${new Date().toISOString()}`);
});

export default app;