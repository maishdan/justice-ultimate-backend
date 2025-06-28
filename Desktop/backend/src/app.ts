import express from 'express';
import authRoutes from './routes/auth.routes';
import hrRoutes from './routes/hr.routes'; // ✅ Add this
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/hr', hrRoutes); // ✅ Register HR route

export default app;
