import "./CSSFiles/LogAll.css";
import img1 from "../Images/login.jpg";
import Menubar from "../Components/Menubar_beforelogin";
import { useNavigate } from "react-router-dom";


function LogInAll() {
  const navigate = useNavigate();
  return (
    <div className="background" style={{ backgroundImage: `url(${img1})` }}>
      <Menubar />

      <center>
        <p className="welcome">Welcome to</p>
        <p className="quizzania">Quizzania</p>
        <p className="welcome" style={{ fontSize: 30, marginTop: -40 }}>
          Exploy the Journey of Quizzes
        </p>
        <div className="container">
          <div
            className="cards"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <img className="img" src={require("../Images/student.png")} />
            <button
              className="btnlog"
              onClick={() => {
                navigate("/studentlogin", {});
              }}
            >
              Student LogIn
            </button>
          </div>
          <div
            className="cards"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <img className="img" src={require("../Images/teacher.png")} />
            <button className="btnlog" onClick={() => {
              navigate("/teacherlogin", {});
            }}>
              Teacher LogIn
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default LogInAll;
