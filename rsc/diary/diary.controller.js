const {DiaryModel} = require("./diary.model")

async function getAll(req, res, err) {
    const diary = await DiaryModel.find()
    console.log(diary);
}

async function newEntry(req, res, err) {
    const diary = await DiaryModel.create(req.body)
    console.log(diary);
}

module.exports = {getAll, newEntry}