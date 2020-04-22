const express = require("express");
const users = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("../Model/user");

users.use(cors());

// register a user
users.post("/register", (req, res) => {
  const today = new Date();

  let email = req.body.email;
  let password = req.body.password;
  let created = today;

  if (email === "" || password === "") res.send("Error, empty parameters");

  const userData = new User({
    email,
    password,
    created,
  });

  // verify if email exist
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      //if user doesn't exist
      if (!user) {
        //encrypt password and hash it with 10 salts
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;

          //create new user and save it
          userData
            .save()
            .then(() => {
              res.json("Success");
            })
            .catch((err) => res.status(400).json("Error: " + err));
        });
      } else {
        res.json({ error: "User already exist" });
      }
    })
    .catch((err) => {
      res.send("Error: " + err);
    });
});

users.put("/login", (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      //compare data if it is true
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send("Success");
      } else {
        //password don't match
        res.json({ error: "Error, password does not match" });
      }
    })
    .catch((err) => {
      res.send("Error: " + err);
    });
});

module.exports = users;
