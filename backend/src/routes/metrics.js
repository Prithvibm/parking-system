import { Router } from 'express';
import { tasks } from '../data/seed.js';
import { calculateSummary } from '../services/metrics.js';

const router = Router();
router.get('/summary', (_req, res) => res.json(calculateSummary(tasks)));
export default router;
