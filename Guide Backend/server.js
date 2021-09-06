const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const app =express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 8070;
const DB_URL =  'mongodb+srv://Hashini96:Hashini1996@onlinetourismmanagement.xfpnv.mongodb.net/TourismDB?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DataBase Connected Successful');
})
.catch((err)=>console.log('DataBase Connection Error',err));



const guideregisterRoutes=require('./routes/GuideRegister');
app.use("/guide",guideregisterRoutes);



app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});


