const express = require("express")
const path = require("path")

const app = express()

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

// secilen route qe bon request e dergon ket index.html file
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
})

app.listen(process.env.PORT || 5000, () => console.log("SERVER RUNNING"))