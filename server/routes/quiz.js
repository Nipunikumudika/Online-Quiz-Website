const { ObjectId } = require("mongodb"); 
const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz");

//authentication
router.post("/quizsets/login",async (req,res)=>{
  try{
    const quiz = await Quiz.findByCredentials(req.body.quizname,req.body.password)
    res.send(quiz)
  }catch(error){
    res.status(401).send(error);
  }
})

// create new quiz
router.post("/quizsets", async (req, res) => {
  console.log(req.body);
  const quiz = new Quiz(req.body);

  try {
    await quiz.save();
    res.status(201).send(quiz);
    // console.log(quiz._id);
  } catch (error) {
    res.status(400).send(error);
  }
  return quiz._id;
});


//get all quizs
router.get("/quizsets", async (req, res) => {
  try {
    const quizs = await Quiz.find({});
    res.status(200).send(quizs);
  } catch (error) {
    res.status(400).send(error);
  }
  const quizs = await Quiz.find({});
});


router.get("/quizsets/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const quizs = await Quiz.findById(_id);

    if (!quizs) {
      return res.status(404).send();
    }

    res.status(200).send(quizs);
  } catch (error) {
    res.status(400).send(error);
  }
});



router.delete("/quizsets/:id",async (req,res)=>{
  try{
      const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id)
      if (!deletedQuiz) {
          return res.status(404).send();
        }
    
        res.status(200).send(deletedQuiz);

  }catch (error) {
      res.status(400).send(error);
    }
})


module.exports = router;
