const {UserModel} = require("./user.model")

async function getUsers(req, res, err) {
    const diary = await UserModel.find()
    res.status(200).json(diary)
}

async function getUserById(req, res, err) {
    const diary = await UserModel.create(req.body)
    res.status(201).json(diary)
}

async function registerUser(req, res, err) {
    const diary = await UserModel.create(req.body)
    res.status(201).json(diary)
}

async function logIn(req, res, err) {
    const diary = await UserModel.find({username: req.body.username})
    res.status(200).json(diary)
}

async function logOut(req, res, err) {
    const diary = await UserModel.create(req.body)
    res.status(201).json(diary)
}

module.exports = {getUsers, getUserById, registerUser, logIn, logOut}