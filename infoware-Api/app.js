const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose")
const app = express();
const morgan = require('morgan');
// const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DB connected")
})
const productRoute = require('./routes/productsRoute');


app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(expressValidator())
app.use('/',productRoute)

app.get('/',(req,res)=>{
    res.send("WELCOME TO INFOWARE-API")
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server activated for 'INFOWARE-API' at ${port}`)
})