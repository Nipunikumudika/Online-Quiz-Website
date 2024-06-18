import React, { useState } from 'react';
import axios from "axios";


function QuizForm({
  username,

})  {

  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    answers: ['', '', '', ''],
    correctAnswerIndex: 0,
  });

  const handleQuestionChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnswerChange = (e, index) => {
    const updatedAnswers = [...newQuestion.answers];
    updatedAnswers[index] = e.target.value;
    setNewQuestion({
      ...newQuestion,
      answers: updatedAnswers,
    });
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({
      question: '',
      answers: ['', '', '', ''],
      correctAnswerIndex: 0,
    });
  };

  const handleSubmit = async(event) => {  
    const postURL = "http://localhost:5000/quizsets";
      event.preventDefault();
      try {
        const submitData = {
          questions: questions,
        };
    console.log(submitData);
        const response = await axios.post(postURL, submitData);
        console.log(response.data._id);

        alert(`Your Quiz id is ${response.data._id}. Save this for future`);

        window.location.reload();
      } catch (error) {
        alert("Error");
      }
  };

  return (
    <div>

      <center>
      {questions.map((question, index) => (
  <div key={index}>
    <h4 style={{color:"white",fontSize:"20px",padding:"10px"}}>Question {index + 1}</h4>
    <p style={{color:"white",fontSize:"20px"}}>{question.question}</p>
    <ul style={{ listStylePosition: "inside", paddingLeft: "0" }}>
      {question.answers.map((answer, answerIndex) => (
        <li key={answerIndex} style={{color:"white",fontSize:"20px"}}>{answer}</li>
      ))}
    </ul>
    <p style={{color:"white",fontSize:"15px"}}>Correct Answer: {question.correctAnswerIndex}</p>
  </div>
))}
      </center>

      <h3 style={{color:"wheat",marginTop:"10px"}}>Add a New Question</h3>
      <input
        type="text"
        name="question"
        placeholder="Question"
        value={newQuestion.question}
        onChange={handleQuestionChange}
        style={{margin:"10px",width:"800px",height:"40px"}}
      />

      {newQuestion.answers.map((answer, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Answer ${index + 1}`}
            value={answer}
            onChange={(e) => handleAnswerChange(e, index)}
            style={{margin:"10px",width:"600px",height:"40px"}}
          />
        </div>
      ))}

      <label style={{color:"wheat"}}>Correct Answer:</label>
      <select
        name="correctAnswerIndex"
        value={newQuestion.correctAnswerIndex}
        onChange={handleQuestionChange}
        style={{margin:"10px",width:"100px",height:"40px"}}
      >
        {newQuestion.answers.map((_, index) => (
          <option key={index} value={index}>
            {`Answer ${index + 1}`}
          </option>
        ))}
      </select>

      <button onClick={handleAddQuestion} style={{margin:"5px",backgroundColor:"lightgreen",padding:"5px"}}>Add Question</button>
      <button onClick={handleSubmit} style={{margin:"5px",backgroundColor:"lightgreen",padding:"5px"}}>Submit Quiz</button>
    </div>
  );
}

export default QuizForm;
