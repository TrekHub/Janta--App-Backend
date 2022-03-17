require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');



//Connecting to the database

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to the database!!'));



app.use(express.json())

//Setting up the Router
const customerRouter = require('./routes/customers');
app.use('/customers', customerRouter)


app.listen(3000, () => console.log("Server Started"));