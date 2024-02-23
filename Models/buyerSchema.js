const mongoose = require("mongoose");

const buyerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, " Please enter a name."],
  },
  username: {
    type: String,
    required: [true, "Please enter a username."],
  },

  password: {
    type: String,
    required: [true, "Please enter a password."],
  }
},

  {timestamps:true}
);

const Buyer = mongoose.model("Buyer", buyerSchema);
module.exports = Buyer;
