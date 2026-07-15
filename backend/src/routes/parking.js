import { Router } from 'express';
import { randomUUID } from 'crypto';

const router = Router();

// In-memory store for demonstration purposes
const parkingSpaces = {
  total: 100,
  reserved: []
};

// Get current parking status
router.get('/', (req, res) => {
  res.json({ 
    message: 'Parking API status', 
    spacesAvailable: parkingSpaces.total - parkingSpaces.reserved.length,
    totalSpaces: parkingSpaces.total
  });
});

// Reserve a parking space
router.post('/reserve', (req, res) => {
  const { licensePlate } = req.body;
  if (!licensePlate) {
    return res.status(400).json({ error: 'License plate is required' });
  }
  
  if (parkingSpaces.reserved.length >= parkingSpaces.total) {
    return res.status(409).json({ error: 'Parking is full' });
  }
  
  const reservationId = randomUUID();
  parkingSpaces.reserved.push({ id: reservationId, licensePlate, timestamp: new Date() });
  
  res.status(201).json({ message: 'Space reserved successfully', reservationId });
});

// Release a parking space
router.delete('/release/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = parkingSpaces.reserved.length;
  parkingSpaces.reserved = parkingSpaces.reserved.filter(r => r.id !== id);
  
  if (parkingSpaces.reserved.length === initialLength) {
    return res.status(404).json({ error: 'Reservation not found' });
  }
  
  res.json({ message: 'Space released successfully' });
});

export default router;
