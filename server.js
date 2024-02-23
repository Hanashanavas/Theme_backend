const express=require('express')
const mongoose = require("mongoose")
const app = express();
const port=8000;
const cors = require('cors');
const Buyer = require('./Models/buyerSchema');

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:'false'}))

app.get("/",(req,res) => {
    res.send("Hello FusionX")
})

//login
app.post('/signup/:username',async(req,res)=>{
    try {
        const {username}=req.params
        const signup=await Buyer.find({username});
        if(!signup){
            return res.status(404).json({message:'Cannot Find account with username ${username}'})
            }
        res.status(200).json(signup)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

//Signup
app.post('/signup',async(req,res)=>{
    try {
        const signup=await Buyer.create(req.body)
        res.status(200).json(signup);
        
    } catch (error) {
       console.log(error.message);
       res.status(500).json({message: error.message}) 
    }
});

mongoose
  .connect("mongodb+srv://FusionX:FusionX@cluster0.4nasrxv.mongodb.net/")
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to MongoDB");
      console.log("Node API is running.");
    });
  })
  .catch(() => {
    console.error("Didnt connect to Mongo DB");
  });