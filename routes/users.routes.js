const router=require('express').Router()
const User=require('../models/user')


router.get('/',(req,res)=>{
    User.find()
    .then(()=>res.status(200).json({message:"data sent"}))
    .catch(()=>res.status(401).json({message:"Error has occured"}))
})

module.exports=router