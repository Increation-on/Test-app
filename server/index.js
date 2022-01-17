require('dotenv').config({path:'../.env'});
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.REACT_APP_PORT || 5000;
const domain = process.env.REACT_APP_DOMAIN;
const authRouter = require('./authRouter');
const cors = require('cors');




const app = express();

app.use(cors({
    origin:"*"
}))

app.use(express.json());
app.use('/auth', authRouter);


const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://increation:132213a@cluster0.prkz5.mongodb.net/users_data?retryWrites=true&w=majority')
        app.listen(port, ()=> console.log(`server started on port ${domain}:${port}`))
    } catch(e){
        console.log(e);
    }
}

start();