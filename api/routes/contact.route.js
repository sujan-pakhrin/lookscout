import express from 'express';
import {createContact} from '../controller/contact.controller.js';


const router = express.Router();

// router.get('/', async (req, res) => {
//     res.send("Hello, this is local");
// });

router.post('/add', createContact);

export default router;
