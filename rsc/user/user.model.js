const { Schema, model, models } = require("mongoose")

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const UserModel = models.user || model("user", userSchema)

module.exports = { UserModel }