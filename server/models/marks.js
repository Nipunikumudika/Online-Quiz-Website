const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marksSchema  = new Schema({
  username: {
    type: String,
    required: true,
  },

  marks: {
    type: Number,
    required: true,
  },

});



const newMarksSchema = new Schema({
    marks: [marksSchema],
  });

const Mark = mongoose.model("Markset", newMarksSchema);

module.exports = Mark ;
