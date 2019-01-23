const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app=express();

app.get('/',(req,res)=>{
res.send('in index js node');
console.log('check');
});

app.listen(PORT,()=>console.log('listening on port'));