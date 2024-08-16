import express from 'express';
const router = express.Router();
import { msgNew } from '../msgControllers/msg.controllers.js';
// import {signupNew,login, userCheck} from '../signupControllers/signup.controllers.js'

router.post('/new',msgNew);
// router.post('/usercheck',userCheck);
// router.post('/login',login);

// router.get('/view/:id',viewSingleTask);

// router.post('/insert',insertTask);

// router.put('/update/:id',updateTask);

// router.delete('/delete/:id',deleteTask);

export default router;