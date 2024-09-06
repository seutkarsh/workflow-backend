import express, { Request, Response, NextFunction } from 'express';
import { connectToDatabase } from './database';
import config from './config';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello, TypeScript with Express!');
});

// Error handling middleware (optional)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
connectToDatabase().then(() => {
  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
  });
});
