import express from 'express';
const router = express.Router();
import { handleContactForm } from '../controllers/contactControllers.js';
import { verifyCaptcha } from '../middlewares/verifyCaptcha.js'

router.post('/contact', verifyCaptcha, handleContactForm);

export default router;
