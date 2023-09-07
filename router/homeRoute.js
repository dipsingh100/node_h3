const homeRoute = require("express").Router()

homeRoute.get("", (req, res)=>{
    res.send("Welcome to the Site")
})


module.exports = homeRoute