require('dotenv').config()
const express=require('express')
const app=express()
const PORT=process.env.PORT || 9000
const mongoose=require('mongoose')
const URL=process.env.URL
const cors=require('cors')

app.use(cors())
mongoose.connect(URL,{useNewUrlParser:true})
app.use(express.json())

app.use('/main',require('./routes/data.routes'))

app.get('*',(req,res)=>{res.send({info:"Wrong path"})})

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})
