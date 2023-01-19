const express = require("express") ;
const mongoose = require("mongoose");
const logger = require('morgan');
const bodyParser = require('body-parser');
const Itemsrouter = require('./routes/ClothesRouter')
const cros = require('cors');
const app = express();

mongoose.connect('mongodb+srv://Oumaima:15072001@cluster0.0miv7.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(7000))
.then(()=> console.log("Connected to the database successfully on port 7000"))
.catch((err)=> console.log(err));
app.use(cros());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use("/Clothes",Itemsrouter);


