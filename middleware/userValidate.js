const appValidate = (req, res, next) => {
    console.log("Application level Middleware called");
    next()
}

const routeValidate = (req, res, next) => {
    const {age} = req.params
    console.log("Routing level Middleware called")

    if(age>=18){
        next()
    }else{
        res.send("You are not allowed");
    }
}

module.exports = { appValidate, routeValidate }

