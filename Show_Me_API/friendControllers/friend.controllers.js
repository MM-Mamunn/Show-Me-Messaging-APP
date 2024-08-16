import { Friend } from '../models/friend.js';

const frndNew = async (req, res) => {
  try {
    const frndNw = await Friend.create(req.body);
    console.log(frndNw);
    
    res.status(200).json(frndNw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export {frndNew};

