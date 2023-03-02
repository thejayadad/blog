const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors');



const app = express();

const port = process.env.PORT || 5000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());



require('dotenv').config();


const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})


app.listen(5000, () => {
    console.log("App Listening")
})