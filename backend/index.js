const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");

const bodyparser = require("body-parser");

let user = {
  fromlanguage: "eng",
  fromtranslation: "Good Morning",
};

const app = express();
app.use(cors()); // cross origin, to use front end in backend
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/translations");

app.post("/translationsData", (req, res) => {
  console.log("Aditya");
  console.log(user);
  console.log(req.body);
  userModel
    .create(req.body)
    .then((translations) => {
      res.json(translations);
    })
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("Server is running");
  console.log("Aditya's Server is running");
});
