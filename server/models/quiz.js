const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema  = new Schema({
  question: {
    type: String,
    required: true,
  },

  answers: [{
    type: String,
    required: true,
  }],
  correctAnswerIndex: {
    type: Number,
    required: true,
  },

});



const quizSchema = new Schema({
    // An array of questions
    questions: [questionSchema],
  });


const Quiz = mongoose.model("Quizset", quizSchema);

module.exports = Quiz ;
