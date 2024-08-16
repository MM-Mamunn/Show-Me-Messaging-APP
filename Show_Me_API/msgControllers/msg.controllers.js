
import { Messages } from '../models/Messages.js';

const msgNew = async (req, res) => {
  try {
    const msgNw = await Messages.create(req.body);
    console.log(msgNw);
    
    res.status(200).json(msgNw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export {msgNew};

