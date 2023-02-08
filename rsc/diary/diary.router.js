const { getAll, newEntry } = require("./diary.controller")
const express = require("express")
const diaryRoute = express.Router()

diaryRoute.get("/", getAll)
diaryRoute.get("/:id", getAll)
diaryRoute.post("/", newEntry)
diaryRoute.put("/:id", getAll)
diaryRoute.delete("/:id", getAll)

module.exports = { diaryRoute }









