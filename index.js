const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log('error connecting db'));

app.listen(8080, ()=>console.log('listening @ 8080'));