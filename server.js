var express = require('express');
var app = express();


app.get('/',function(request,response){
   response.send('From Server'); 
});

app.listen(3000,function(){
    console.log('Server running on port 3000');
});