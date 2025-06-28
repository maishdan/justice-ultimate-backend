"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 📁 src/routes/hr.routes.ts
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
// ✅ Type-safe route handler without TS mismatch
router.get('/dashboard', auth_middleware_1.authenticateToken, (_req, res) => {
    res.json({ message: 'Welcome to HR dashboard 🔐' });
});
exports.default = router;
