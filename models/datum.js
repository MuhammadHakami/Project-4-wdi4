const mongoose=require('mongoose')
const Schema=mongoose.Schema

const datumSchema=new Schema({
    title: String,
    model: String,
    data:Number
})

const Datum=mongoose.model('Datum',datumSchema)
module.exports=Datum
