// 📁 src/routes/auth.routes.ts
import express from "express";
import * as AuthController from "../controllers/auth.controller";

const router = express.Router();

// ✅ Correct route handlers
router.post("/register", AuthController.register as any);
router.post("/login", AuthController.login as any);

export default router;
