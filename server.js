const express = require('express')
let bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}))
let employees=[
    {
        "id":1,
        "name":"abdul"
    },
    {
        "id":2,
        "name":"shivani"
    },
    {
        "id":3,
        "name":"aman"
    }
];
app.get('/',(req,res)=>{
let tempEmployee = req.headers;
  //  console.log(tempEmployee)
if(tempEmployee)
employees.push(req.body);
res.send(employees);
});

app.post('/',(req,res)=>{
    let emp = req.body;
    console.log(emp)
    if(!emp || emp.name===""){
        res.send({"error":"Name can't be empty"});
    }else{
        employees.push(emp);
        res.send(employees);
    }
})
app.listen(3000,()=>console.log('listening on port'));



/*express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/