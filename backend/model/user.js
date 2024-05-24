const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  fromlanguage: String,
  fromtranslation: String,
  tolanguage: String,
  totranslation: String
});

const userModel = mongoose.model("translations",userSchema)
module.exports = userModel



