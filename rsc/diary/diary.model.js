const { Schema, model, models } = require("mongoose")

const diarySchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const DiaryModel = models.diary || model("diary", diarySchema)

module.exports = { DiaryModel }