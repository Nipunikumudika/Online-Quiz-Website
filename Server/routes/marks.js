const { ObjectId } = require("mongodb"); 
const express = require("express");
const router = express.Router();
const Mark = require("../models/marks");


// create new mark
router.post("/marksets", async (req, res) => {
  console.log(req.body);
  const mark = new Mark(req.body);

  try {
    await mark.save();
    res.status(201).send(mark);
    // console.log(mark._id);
  } catch (error) {
    res.status(400).send(error);
  }
  return mark._id;
});




//get all marks
router.get("/marksets", async (req, res) => {
  try {
    const marks = await Mark.find({});
    res.status(200).send(marks);
  } catch (error) {
    res.status(400).send(error);
  }
  const marks = await Mark.find({});
});


router.get("/marksets/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const marks = await Mark.findById(_id);

    if (!marks) {
      return res.status(404).send();
    }

    res.status(200).send(marks);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;


router.put("/marksets/:id", async (req, res) => {
  try {
    const existingMarkSet = await Mark.findById(req.params.id);

    if (!existingMarkSet) {
      return res.status(404).send("Mark set not found");
    }
   
    const updatedMarkSet = await Mark.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).send(updatedMarkSet);
  } catch (error) {
    res.status(400).send(error);
  }
});

