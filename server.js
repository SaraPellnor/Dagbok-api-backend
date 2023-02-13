const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
app.use(
    cookieSession({
        secret: "secret",
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    })
);

const { userRoute } = require("./rsc/user/user.router")
const { diaryRoute } = require("./rsc/diary/diary.router")

app.use(express.json());

app.use("/user", userRoute)
app.use("/diary", diaryRoute)

async function init() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://sarapellnor:R77zPxx1QYMUvu3U@cluster0.hbp4b1l.mongodb.net/Diary');
        app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
    } catch (err) {
        console.error(err);
    }
}
init()