const comicsRouter = require("express").Router()

comicsRouter.get("/todo", comicsControllergetcomics)

module.exports = comicsRouter