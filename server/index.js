const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000;
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const mongoUrl = `mongodb://${process.env.dbUsername}:${process.env.dbPassword}@${process.env.dbHost}:${process.env.dbPort}/${process.env.dbName}`;

mongoose.connect(mongoUrl)
  .then(() => console.log(`Connected to mongodb: ${mongoUrl}`))
  .catch(e => {
    console.log(e);
    console.log(`Error trying to connect to mongo url: ${mongoUrl}`)
  })

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  jobTitle: String,
  income: Number
});

const Employee = mongoose.model("Employee", employeeSchema);

app.use(cors())
app.use(express.json());
app.get('/employees', async function (req, res) {
  try{
    const results = await Employee.find();
    return res.json(results)
  }catch(e){
    return res.status(httpStatus.INTERNAL_SERVER_ERROR)
  }
  
})
app.post("/employees", async function(req, res) {
  try{
    const result = await Employee.create(req.body);
    return res.json(result);   
  }catch(e){
    return res.status(httpStatus.INTERNAL_SERVER_ERROR)
  }
})

app.listen(port, ()=>{
  console.log(`Express is running on port ${port}...`)
})