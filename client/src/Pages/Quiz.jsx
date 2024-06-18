import "./CSSFiles/Quiz.css";
import img1 from "../Images/question_interface.jpg";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Timer from "../Components/Timer";
import Questions from "../Components/Questions";
import { useEffect } from "react";

function Quiz() {

  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
const [data, setData] = useState([]);

const location = useLocation();
let quizId=location.state.key;
const username =location.state.username; 
console.log("username");
console.log(username);
  useEffect(() => {
  
    const fetchData = async () => {
      console.log("quizId");
      console.log(quizId);
      const username =location.state.username; 
      try {
        const response = await axios.get(`http://localhost:5000/quizsets/${quizId}`);
        const questions = response.data.questions;
  
        const transformedData = questions.map((question, index) => ({
          id: index + 1,
          question: question.question,
          answers: question.answers.map((answer, answerIndex) => ({
            id:answerIndex,
            text: answer,
            correct: answerIndex === question.correctAnswerIndex,
          })),
        }));
        setData(transformedData);
        console.log(transformedData);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
  
    fetchData();

  }, []);
  





  return (
    <div className="background" style={{ backgroundImage: `url(${img1})` }}>
      <div className="top">
        {questionNumber <= data.length && (
          <div className="timer">
            <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
          </div>
        )}
      </div>
      <div className="bottom">
        <Questions
          data={data}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setTimeOut={setTimeOut}
          username={username}
          keyname={quizId}
        />
      </div>
    </div>
  );
  
}

export default Quiz;
