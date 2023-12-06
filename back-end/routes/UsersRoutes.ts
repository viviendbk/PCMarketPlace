import express, { Request, Response } from 'express';
import Users from '../models/Users';

const usersRoutes = express.Router();

// Create a new user
usersRoutes.post('/users', async (req: Request, res: Response) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all users
usersRoutes.get('/api/users', async (req: Request, res: Response) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific user by ID
usersRoutes.get('/users/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params['id'], 10);

  try {
    const user = await Users.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user by ID
usersRoutes.put('/users/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params['id'], 10);

  try {
    const user = await Users.findByPk(userId);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user by ID
usersRoutes.delete('/users/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params['id'], 10);

  try {
    const user = await Users.findByPk(userId);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default usersRoutes;
