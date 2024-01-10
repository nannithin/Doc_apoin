import express from 'express';
import { AddDoctor, getAdminData } from '../controllers/admin.js';

const router = express.Router();

router.post('/adddoctor',AddDoctor);
router.get('/test',getAdminData)

export default router;