const {UserModel} = require("./user.model")

async function getUsers(req, res, err) {
    const diary = await UserModel.find()
    res.status(200).json(diary)
}

async function getUserById(req, res, err) {
    const user = await UserModel.findById(req.params.id)
    res.status(201).json(user)
}

async function registerUser(req, res, err) {
    const diary = await UserModel.create(req.body)
    res.status(201).json(diary)
}

async function logIn(req, res, err) {
    try {
        const diary = await UserModel.find({username: req.body.username})
        req.session = diary
    res.status(200).json(diary)
    } catch (error) {
        res.status(404).json(error)
    }
}

async function logOut(req, res, err) {
    req.session = null
    res.status(200).json("logged out")
}

module.exports = {getUsers, getUserById, registerUser, logIn, logOut}