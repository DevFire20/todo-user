const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require('./DB/DB')
require("dotenv").config();
const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/", require("./routes/todo"));

app.use("/", require("./routes/user"))

connectDb();

const port = process.env.port || 3000
app.listen(port, () => {
  console.log("listening on port 3000");
});
