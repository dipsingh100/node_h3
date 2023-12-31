const { register, login } = require("../controller/userController")
const { routeValidate } = require("../middleware/userValidate")

const userRoutes = require("express").Router()

userRoutes.get("/login/:age", routeValidate, login)
userRoutes.get("/register/:age", routeValidate, register)

module.exports = userRoutes