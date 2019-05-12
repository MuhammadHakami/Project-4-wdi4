const routes=require('express').Router()
const Datum=require('../models/datum')

routes.get('/',(req,res)=>{
    Datum.find()
    .then(datum=>res.status(200).json({datum}))
    .catch(err=>console.log(err))
})

routes.post('/',(req,res)=>{
    Datum.create(req.body)
    .then(()=>res.status(200).json({message:"Data registered Successfully!"}))
    .catch(()=>res.status(401).json({message:"Something went wrong"}))
})

module.exports=routes
