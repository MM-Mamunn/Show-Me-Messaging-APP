import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
const router = express.Router();
import signuproute from './routes/signup.route.js'
import msgroute from  './routes/msg.route.js'
import frndroute from './routes/frnd.route.js'
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/signup',signuproute)
app.use('/api/msg',msgroute)
app.use('/api/frnd',frndroute)


await mongoose.connect('mongodb://127.0.0.1:28017/showme')
.then(()=>{
  console.log("connected");
  app.listen(port, () => {
    console.log(`server  listening on port ${port}`)
  })
  
})
.catch(()=>{
  console.log("not connected");
})
