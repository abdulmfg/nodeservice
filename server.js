const express = require('express')
var app=express();
let employees=[
    
];
app.get('/',(req,res)=>{
res.send('in index js node');
});

app.listen(3000,()=>console.log('listening on port'));



/*express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/