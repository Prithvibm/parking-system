import cors from 'cors';
import express from 'express';
import membersRouter from './routes/members.js';
import metricsRouter from './routes/metrics.js';
import tasksRouter from './routes/tasks.js';
import parkingRouter from './routes/parking.js';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'parking-system-api' }));
app.use('/api/tasks', tasksRouter);
app.use('/api/members', membersRouter);
app.use('/api/metrics', metricsRouter);
app.use('/api/parking', parkingRouter);
app.use((req, res) => res.status(404).json({ error: `No route for ${req.method} ${req.path}` }));

app.listen(process.env.PORT || 4000, () => console.log('Parking System API listening on port 4000'));
