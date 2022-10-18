
const mongoose = require('mongoose');
require('dotenv').config()
const connectDb = ()=>{
    mongoose.connect(process.env.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("mongoDb connected");
};
module.exports = connectDb;