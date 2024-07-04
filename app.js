// import exprss
const express=require('express');
//create an express app
const app=express();
app.get('/',(request,response)=>
{
    response.send("hello world");
})
module.exports=app;