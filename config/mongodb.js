const mongoose=require('mongoose')

mongoose.connect(process.env.URL,{useNewUrlParser:true})
.then(()=>console.log("mongoodb is connected"))
.catch(err=>console.log(err))

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
