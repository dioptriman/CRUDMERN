//Dependencies
//Server
const express = require('express');

//Database
const mongoose = require('mongoose');

//Connection to GUI
const cors = require('cors');

//Morgan (API Log)
const morgan = require('morgan');

//Making API
//Making an app
const app = express();

//JSON parser by express
app.use(express.json());

//Reading env file
require('dotenv/config');

//Using API logger
app.use(morgan('tiny'));

//Using the cors for connecting backend and frontend
app.use(cors());
app.options('*', cors());


//Variable for the apps
//api
const api = process.env.API_URL;

//port
const port = 9000

//DB connection
const db = process.env.DB_CONNECTION

//Server Action
//Connect with the DB
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology : true,
    dbName: 'crudmern'
})
.then(()=>{
    console.log("DB is connected");
})
.catch((err)=>{
    console.log(err);
})

//Get Method
app.get('/',(req, res)=>{
    res.send('Hello World!');
})


//Router for user
const userRouter = require('./router/userrouter');
app.use(userRouter);


//Listening port
app.listen(port, ()=>{
    console.log(`${api}`)
    console.log(`${db}`)
    console.log(`server is running at http://localhost:${port}`)
})



