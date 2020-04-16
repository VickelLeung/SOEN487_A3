const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connection established");
});

// Test server functions
app.get("/", function (req, res) {
  res.send("hello world : " + process.env.apikey);
});

const historyRoute = require("./SystemCore/historyCurrencyAPI");
app.use("/api", historyRoute);

const latestRoute = require("./SystemCore/latestCurrencyAPI");
app.use("/api", latestRoute);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
