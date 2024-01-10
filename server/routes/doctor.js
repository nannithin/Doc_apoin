import express from 'express';
import { deleteData, getData, getSingleData } from '../controllers/doctor.js';

const router = express.Router();


router.get('/getdata',getData)
router.post('/getsingledata',getSingleData);
router.delete('/deletedoctor',deleteData)

export default router;