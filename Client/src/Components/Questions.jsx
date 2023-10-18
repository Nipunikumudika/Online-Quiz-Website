import { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../Sounds/correct.mp3";
import wrong from "../Sounds/wrong.mp3";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Questions({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  username,
  keyname,
}) {
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  let [marks, setmarks] = useState(0);
  let [fmarks, setfmarks] = useState();
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const location = useLocation();
  console.log("key");
  console.log(keyname);
  useEffect(() => {
    let length = data.length;
    if (questionNumber <= length) {
      setQuestion(data[questionNumber - 1]);
    } else {
      setfmarks((marks / length) * 100);
    }
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    if (question) {
      const timer = setTimeout(() => {
        setTimeOut(true);
        setClassName("answer");
        setSelectedAnswer(null);
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1);
        }, 1000);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [question, questionNumber, setTimeOut, setQuestionNumber]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const postURL = "http://localhost:5000/marksets";

  //   try {
  //     console.log("key");
  //     console.log(keyname);
  //     const submitData = {
  //       _id: keyname,
  //       marks: [{ username: username, marks: fmarks }],
  //     };
  //     console.log(submitData);

  //     const response = await axios.post(postURL, submitData);
  //     console.log(response.data._id);
  //     alert("marks added successfully");

  //     navigate("/student", {
  //       state: {
  //         username: username,
  //       },
  //     });
  //   } catch (error) {
  //     alert("Error");
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const postURL = "http://localhost:5000/marksets";
    const getURL = `http://localhost:5000/marksets/${keyname}`;
  
    try {
      let existingDataResponse;
      try {
        existingDataResponse = await axios.get(getURL);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("No existing data found.");
          existingDataResponse = null;
        } else {
          throw error; // Rethrow other errors
        }
      }
  
      if (existingDataResponse) {
        console.log("Existing data found.");
        const existingData = existingDataResponse.data;
        console.log("Existing data:");
        console.log(existingData);
        const newData = {
          username: username,
          marks: fmarks,
        };
        existingData.marks.push(newData);
        console.log(existingData);
        const response = await axios.put(getURL, existingData);
        console.log(response.data._id);
      } else {
        console.log("No existing data found, creating new data.");
        const submitData = {
          _id: keyname,
          marks: [{ username: username, marks: fmarks }],
        };
        console.log(submitData);
        const response = await axios.post(postURL, submitData);
        console.log(response.data._id);
      }
  
      navigate("/leaderboard", {
        state: {
          username: username,
          keyname: keyname,
          logtype:location.state.logtype,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Error");
    }
  };
  

  useEffect(() => {
    console.log(fmarks);
  }, [fmarks]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        setmarks(marks + 1);

        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      }
    });
  };
  return (
    <div className="trivia">
      {questionNumber <= data.length ? (
        <>
          <div className="question">{question?.question}</div>
          <div className="answers">
            {question?.answers.map((a, index) => (
              <div
                key={index}
                className={selectedAnswer === a ? className : "answer"}
                onClick={() => !selectedAnswer && handleClick(a)}
              >
                {a.text}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <button onClick={handleSubmit} className="btnlog">go to leaderboard</button>
        </div>
      )}
    </div>
  );
}
