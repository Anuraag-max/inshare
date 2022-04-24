const express = require("express")
const connectDB = require("./config/db")
const path = require("path")
const app = express()
connectDB()

// Template Engine
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.json())

// Routes
app.use("/api/files", require("./routes/file"))
app.use("/files", require("./routes/show"))
app.use("/files/download", require("./routes/download"))

PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})