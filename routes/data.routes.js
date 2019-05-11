const routes=require('express').Router()


routes.get('/',(req,res)=>{
    res.send({message:"test try"})
})

module.exports=routes