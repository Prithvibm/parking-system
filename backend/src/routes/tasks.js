import { Router } from 'express';
import { tasks } from '../data/seed.js';
import { validateTask } from '../services/validation.js';

const router = Router();
router.get('/', (_req, res) => res.json(tasks));
router.get('/:id', (req, res) => { const task = tasks.find(item => item.id === req.params.id); return task ? res.json(task) : res.status(404).json({ error: 'Task not found' }); });
router.post('/', (req, res) => { const errors = validateTask(req.body); if (errors.length) return res.status(400).json({ errors }); const task = { id: `T-${100 + tasks.length + 1}`, ...req.body }; tasks.push(task); return res.status(201).json(task); });
router.patch('/:id', (req, res) => { const task = tasks.find(item => item.id === req.params.id); if (!task) return res.status(404).json({ error: 'Task not found' }); Object.assign(task, req.body); return res.json(task); });
export default router;
