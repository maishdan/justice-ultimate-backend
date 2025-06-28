import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db';
import { users } from '../models/user.model';
import { registerSchema } from '../utils/validation';
import { eq } from 'drizzle-orm';

export const register = async (req: Request, res: Response) => {
  try {
    const parsed = registerSchema.parse(req.body);

    const existingUser = await db.select().from(users).where(eq(users.email, parsed.email));
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

const hashedPassword = await bcrypt.hash(parsed.password, 10);

// TODO: Save the new user to the database here

return res.status(201).json({ message: 'User registered successfully' });
  } catch (error: any) {
    console.error('Registration error:', error);
    return res.status(400).json({ error: 'Registration failed', details: error.errors || error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const [user] = await db
      .select({
        id: users.id,
        email: users.email,
        password: users.password,
        role: users.role, // ✅ Also select role
      })
      .from(users)
      .where(eq(users.email, email));

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    if (!user.password) {
      return res.status(400).json({ error: 'User has no password stored.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role, // ✅ Return correct role
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
};
