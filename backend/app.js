const express=require('express');
var cors=require('cors')
const mongoose=require('mongoose');
const port=3001;
const app=express();
const router=require('./routers/sliderRoutes')

//Middleware
app.use(cors());
app.use(express.json());
app.use('/home',router)


mongoose.connect("mongodb+srv://Laman:rBd8q8Tq2iwWIUZC@cluster0.m9czfiv.mongodb.net/FrontEndProject1DB?retryWrites=true&w=majority")
.then(()=>console.log('Connect Database..!'))
.then(()=>{
    app.listen(port)
})
.catch((err)=>console.log(err));