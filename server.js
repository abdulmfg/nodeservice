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
res.send(employees);
});

app.delete('/',(req,res)=>{
    employees.pop();
    res.send(employees);
})
app.put('/:id',(req,res)=>{
    
    let newName=req.body.name;
    let oldId=req.params.id;
    console.log('id is',oldId)
    console.log(newName)
    if(oldId){
        for(let x=0;x<employees.length;x++){
            let emp = employees[x];
            if(emp.id == oldId){
                
                employees[x].name = newName;
                res.send(oldId);
                break;
            }
        }
    }
})
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
app.listen(process.env.PORT,()=>console.log(`listening on port ${2+3}`));



/*express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/