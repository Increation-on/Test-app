const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const authRouter = require('./authRouter')
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
        app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
    } catch(e){
        console.log(e);
    }
}

start();