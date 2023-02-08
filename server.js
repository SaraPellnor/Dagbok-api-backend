const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use = express.json()

async function init() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://sarapellnor:R77zPxx1QYMUvu3U@cluster0.hbp4b1l.mongodb.net/test');
        app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
    } catch (err) {
        console.error(err);
    }
}
init()