require("dotenv").config();
// importing packages
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const { router } = require("./routes/appRouter");
// initializing constant
const serverPort=process.env.PORT_NO||5000
// middlewares
app.use(bodyParser.json({ limit: "20mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))
app.use(cors());
app.use(router);

// server listening
app.listen(serverPort, () => {
    console.log(`Server is running on PORT ${serverPort} at ${new Date()}`)
})