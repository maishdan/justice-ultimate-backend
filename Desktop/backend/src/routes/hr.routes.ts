// 📁 src/routes/hr.routes.ts
import express from 'express';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();

// ✅ Type-safe route handler without TS mismatch
router.get('/dashboard', authenticateToken as any, (_req, res) => {
  res.json({ message: 'Welcome to HR dashboard 🔐' });
});

export default router;
