import "./CSSFiles/StudentAfterLog.css";
import axios from "axios";
import Menubar from "../Components/Menubar_afterlogin";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import QuizForm from "./QuizForm";
import Popup from "../Components/popup";

function TeacherAfterLog() {
  const [isOpen, setIsOpen] = useState(false);
  const [quizKey, setQuizKey] = useState();
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = async (event, key) => {

    const url = `http://localhost:5000/quizsets/${key}`;

    event.preventDefault();
    try {
      const response = await axios.delete(url);
      console.log(response);
     togglePopup();
      alert("Quiz delete successfully");
      setQuizKey("");
    } catch (error) {
      alert("Error! Cannot Deleted");
    }
  };

  console.log(location.state.username);
  return (
    <div className="background">
      <Menubar />
      <center>
        <div className="container1">
          <div className="column_container">
            <center>
              <p style={{ fontSize: 50, color: "#F4DF25", fontWeight: 500 }}>
                Teacher
              </p>
              <img
                style={{ margin: 0 }}
                className="img"
                src={require("../Images/teacher.png")}
              />
            </center>
          </div>

          <div className="cards">
            <div style={{ height: "55vh", overflow: "auto" }}>
              <QuizForm username={location.state.username} />
            </div>

            <div style={{ display: "flex",width:"35vw" }}>
              <center>
              <button
                className="btnlog"
                onClick={() => {
                  navigate("/quizlogin", {
                    state: {
                      username: location.state.username,
                      logtype:location.state.logtype,
                    },
                  });
                }}
                style={{ marginTop: "15vh",marginRight:"10px" }}
              >
                Check Leaderboard
              </button>
              <button
                className="btnlog"
                onClick={() => {
                  togglePopup();
                }}
                style={{ marginTop: "15vh" }}
              >
                Delete a Quiz
              </button>





              {isOpen && (
          <Popup
            content={
              <>
                <center>
                  <h3>Enter Quiz Key to Delete</h3>
                </center>

                <form>
                  <center>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ fontSize: 15, fontWeight: "bold" }}>
                        Key
                      </div>
                      <span
                        style={{ display: "inline-block", width: 25 }}
                      ></span>
                      <input
                        style={{ fontSize: 15 }}
                        type="text"
                        name="Key"
                        placeholder="Enter Quiz Key"
                        value={quizKey}
                        onChange={(inputKey) => {
                          setQuizKey(inputKey.target.value);
                        }}
                      />
                    </div>
                    <br />
                    <button
                      type="button"
                      className="loginbtn"
                      onClick={(event) => handleDelete(event, quizKey)}
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    >
                      Delete
                    </button>
                  </center>
                </form>
              </>
            }
            handleClose={togglePopup}
          />
        )}



              </center>
             
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default TeacherAfterLog;
