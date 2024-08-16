import express from 'express';
const router = express.Router();
import { friends, frndNew } from '../friendControllers/friend.controllers.js';
// import {signupNew,login, userCheck} from '../signupControllers/signup.controllers.js'

router.post('/new',frndNew);
router.get('/frnds/:user',friends);
// router.post('/usercheck',userCheck);
// router.post('/login',login);

// router.get('/view/:id',viewSingleTask);

// router.post('/insert',insertTask);

// router.put('/update/:id',updateTask);

// router.delete('/delete/:id',deleteTask);

export default router;