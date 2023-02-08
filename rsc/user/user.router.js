const {getUsers, getUserById, registerUser, logIn, logOut} = require("./user.controller")
const express = require("express")
const userRoute = express.Router()

userRoute.get("/", getUsers)
userRoute.get("/:id", getUserById )
userRoute.post("/register", registerUser)
userRoute.post("/logIn", logIn)
userRoute.post("/logOut", logOut)
// userRoute.put("/:id", )
// userRoute.delete("/:id", )

module.exports = { userRoute }









