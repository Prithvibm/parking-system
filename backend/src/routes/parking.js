import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Parking API initialized', spacesAvailable: 100 });
});

export default router;
