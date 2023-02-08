const {DiaryModel} = require("./diary.model")

async function getAll(req, res, err) {
    const diary = await DiaryModel.find()
    res.status(200).json(diary)
}

async function newEntry(req, res, err) {
    const diary = await DiaryModel.create(req.body)
    res.status(201).json(diary)
}

module.exports = {getAll, newEntry}