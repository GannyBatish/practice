const express=require('express');  //framework for nodejs

//create server
const app=express();
//routes
app.get('/',(req,res)=>{
    res.send('Server is Running')
})
app.get('/api',(req,res)=>{
    res.send('API');
})

//kise post te on krna server nu
app.listen(5000,console.log('Listening at PORT http://localhost:5000'));
