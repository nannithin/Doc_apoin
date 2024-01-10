import express from 'express';
import { Login, isLoggedin, register } from '../controllers/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',Login);
router.get('/isloggedin',isLoggedin)


export default router;