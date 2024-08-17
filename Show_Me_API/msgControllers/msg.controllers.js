
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

const msgAll = async (req, res) => {
  try {
    const { from, to} = req.body;
    const all = await Messages.find({from,to});
    const all2 = await Messages.find({from:to,to:from});
    const all3 = [...all,...all2];
    all3.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    res.status(200).json(all3);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {msgNew,msgAll};

