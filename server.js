require('dotenv').config()
require('./config/mongodb')
const express=require('express')
const server=express()
const PORT=process.env.PORT || 9000
const cors=require('cors')
const passport=require('passport')
const session = require('express-session')

server.use(cors())
server.use(express.json())

//create session for passport
server.use(session({
    secret : process.env.JWTSecret,
    resave : false,
    saveUninitialized : true
   }))
   
   server.use(passport.initialize())
   server.use(passport.session())

//routes
server.use('/auth', require('./routes/auth.routes'))
server.use('/main', passport.authenticate('jwt', {session: false}), require('./routes/data.routes'))


server.get('*',(req,res)=>{res.send({info:"Wrong path"})})

server.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})

