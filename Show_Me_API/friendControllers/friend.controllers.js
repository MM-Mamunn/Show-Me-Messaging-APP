import { Friend } from '../models/friend.js';

const frndNew = async (req, res) => {
  try {
    console.log(req.body);
    
    const frndNw = await Friend.create(req.body);
    let t = req.body.userName1;
    req.body.userName1 = req.body.userName2;
    req.body.userName2 = t;  
    
    // const frndNw2 = await Friend.create(req.body);
    res.status(200).json({message:"success"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const friends = async (req, res) => {
  try {
    const { user } = req.params;
    console.log(user);
    
    const fromm = await Friend.find({
      $or: [{ userName1: user }, { userName2: user }]
  });
  for (let i = 0; i < fromm.length; i++) {
    if(fromm[i].userName1 != user){
      const temp = fromm[i].userName1; // Temporarily store userName1
      fromm[i].userName1 = fromm[i].userName2; // Assign userName2 to userName1
      fromm[i].userName2 = temp; // Assign the temporary value (original userName1) to userName2
    } 
  }
    res.status(200).json(fromm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export {frndNew,friends};

