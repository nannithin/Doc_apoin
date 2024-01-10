import express from 'express';
import authRoutes from './auth.js';
import doctorRoutes from './doctor.js';
import userRoutes from './user.js';
import { verifyadmin, verifytoken } from '../controllers/auth.js';
import adminRoutes from './admin.js'
const router = express.Router();

router.use('/auth',authRoutes);
router.use('/doctor',verifytoken,doctorRoutes);
router.use('/user',verifytoken,userRoutes);
router.use('/admin',verifytoken,verifyadmin,adminRoutes);

export default router;