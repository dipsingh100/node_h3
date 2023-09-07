const login = (req, res) => {
    res.send("User Logged in Successfully")
}

const register = (req, res) => {
    res.send("User Registered Successfully")
}

module.exports = { login, register }