const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const petSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    name: String,
    age: String,
    breed: String,
    pictureUrl: String
  },
  {
    // keeps record when is created and updated
    timestamps: true
  }
);

// const Pet = model('Pet', petSchema);
// module.exports = Pet;

module.exports = model("Pet", petSchema);
