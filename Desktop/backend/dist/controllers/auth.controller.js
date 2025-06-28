"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../db");
const user_model_1 = require("../models/user.model");
const validation_1 = require("../utils/validation");
const drizzle_orm_1 = require("drizzle-orm");
const register = async (req, res) => {
    try {
        const parsed = validation_1.registerSchema.parse(req.body);
        const existingUser = await db_1.db.select().from(user_model_1.users).where((0, drizzle_orm_1.eq)(user_model_1.users.email, parsed.email));
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        const hashedPassword = await bcryptjs_1.default.hash(parsed.password, 10);
        // TODO: Save the new user to the database here
        return res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error('Registration error:', error);
        return res.status(400).json({ error: 'Registration failed', details: error.errors || error.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [user] = await db_1.db
            .select({
            id: user_model_1.users.id,
            email: user_model_1.users.email,
            password: user_model_1.users.password,
            role: user_model_1.users.role, // ✅ Also select role
        })
            .from(user_model_1.users)
            .where((0, drizzle_orm_1.eq)(user_model_1.users.email, email));
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        if (!user.password) {
            return res.status(400).json({ error: 'User has no password stored.' });
        }
        const passwordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', {
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
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Login failed' });
    }
};
exports.login = login;
