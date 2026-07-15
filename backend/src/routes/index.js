import { Router } from 'express';
import membersRouter from './members.js';
import metricsRouter from './metrics.js';
import tasksRouter from './tasks.js';
import parkingRouter from './parking.js';

const router = Router();

router.get('/health', (_req, res) => res.json({ status: 'ok', service: 'parking-system-api' }));
router.use('/tasks', tasksRouter);
router.use('/members', membersRouter);
router.use('/metrics', metricsRouter);
router.use('/parking', parkingRouter);

export default router;
