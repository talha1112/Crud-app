const express =require('express')
const mongoose =require('mongoose')
const cors =require('cors')

const EmployeeModel =require('./models/employee')



mongoose.connect("mongodb+srv://talhamasood120:talhamasood@website.ppfkac7.mongodb.net/crud")

const app =express()
app.use(cors())
app.use(express.json())

app.get('/',(res,req)=>{
    EmployeeModel.find({})
    .then(emp=>res.json(emp))
    .catch(err=>console.log(err))
})
 
app.put('/updateUser/:id',(res,req)=>{
    const id = req.params.id;
    EmployeeModel.findByIdAndUpdate({_id:id},{
        name: req.body.name,
        desig:req.body.desig})
    .then(emp=>res.json(emp))
    .catch(err=>console.log(err))
})

app.delete('/deleteUser/:id',(res,req)=>{
    const id = req.params.id;
    EmployeeModel.findByIdAndDelete({_id:id})
    .then(emp=>res.json(emp))
    .catch(err=>console.log(err))
})


app.get('/getemp/:id',(res,req)=>{
    const id = req.params.id;
    EmployeeModel.findbyid({_id:id})
    .then(emp=>res.json(emp))
    .catch(err=>console.log(err))
})



app.post("./CreateEmp",(req,res) => {
    EmployeeModel.create(req.body)
    .then(emp=>res.json(emp))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Server is Running")
})
