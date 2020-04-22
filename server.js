const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// verify database credential
mongoose.connect(process.env.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// connect to database
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connection established");
});

// Test server functions
app.get("/", function (req, res) {
  res.send("Welcome to Currenshipfy");
});

// routes for end points
const historyRoute = require("./SystemCore/HistoryCurrencyAPI");
app.use("/api", historyRoute);

const latestRoute = require("./SystemCore/latestCurrencyAPI");
app.use("/api", latestRoute);

const userRoute = require("./Routes/userRoutes");
app.use("/authenticate", userRoute);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
