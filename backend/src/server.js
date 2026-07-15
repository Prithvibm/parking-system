import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';
import { globalErrorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', routes);

// Handle 404 routes
app.use((req, res) => res.status(404).json({ error: `No route for ${req.method} ${req.path}` }));

// Global Error Handler
app.use(globalErrorHandler);

app.listen(process.env.PORT || 4000, () => console.log('Parking System API listening on port 4000'));
