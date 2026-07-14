import { Router } from 'express';
import { members } from '../data/seed.js';

const router = Router();
router.get('/', (_req, res) => res.json(members));
router.get('/:id', (req, res) => { const member = members.find(item => item.id === req.params.id); return member ? res.json(member) : res.status(404).json({ error: 'Member not found' }); });
export default router;
