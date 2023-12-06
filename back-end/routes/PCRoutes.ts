import express, { Request, Response } from 'express';
import PC from '../models/PC';
import PCComposition from '../models/PCComposition';

const PCRoutes = express.Router();

// Create a new PC
PCRoutes.post('/api/pcs', async (req: Request, res: Response) => {
  try {
    const newPC = await PC.create(req.body);
    res.status(201).json(newPC);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all PCs
PCRoutes.get('/api/pcs', async (req: Request, res: Response) => {
  try {
    const pcs = await PC.findAll();
    res.json(pcs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific PC by ID
PCRoutes.get('/api/pcs/:id', async (req: Request, res: Response) => {
  const pcId = parseInt(req.params['id'], 10);

  try {
    const pc = await PC.findByPk(pcId);
    if (pc) {
      res.json(pc);
    } else {
      res.status(404).json({ error: 'PC not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a PC by ID
PCRoutes.put('/api/pcs/:id', async (req: Request, res: Response) => {
  const pcId = parseInt(req.params['id'], 10);

  try {
    const pc = await PC.findByPk(pcId);
    if (pc) {
      await pc.update(req.body);
      res.json(pc);
    } else {
      res.status(404).json({ error: 'PC not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a PC by ID
PCRoutes.delete('/api/pcs/:id', async (req: Request, res: Response) => {
  const pcId = parseInt(req.params['id'], 10);

  try {
    const pc = await PC.findByPk(pcId);
    if (pc) {
      await pc.destroy();
      res.json({ message: 'PC deleted successfully' });
    } else {
      res.status(404).json({ error: 'PC not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default PCRoutes;
