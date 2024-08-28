const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: String,
//   description: String,

//   stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

 const Group = mongoose.model("Group", groupSchema);


module.exports = Group;