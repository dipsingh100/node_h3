const express = require("express")
const cors = require("cors")
const { appValidate } = require("./middleware/userValidate")
const userRoutes = require("./router/userRoutes")
const app = express()

app.use(cors({
    origin: "*"
}))


app.use(appValidate)
app.use("/user", userRoutes)

const port = 8000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})