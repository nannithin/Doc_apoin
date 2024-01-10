import express from 'express';
import { getUser } from '../controllers/user.js';
import { getMobile } from '../controllers/mobile.js';

const router = express.Router();

router.get('/getuser',getUser);
router.get('/mobilespecs',getMobile)

export default router;