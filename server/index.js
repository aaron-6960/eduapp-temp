const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const login = require("./Routes/login");
const chat = require("./Routes/msg")

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/", login);
app.use("/chat", chat);

const server = app.listen(process.env.PORT, () => {
  console.log("Port open at port", process.env.PORT);
});
