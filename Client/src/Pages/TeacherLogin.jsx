import "./CSSFiles/LogAll.css";
import img1 from "../Images/login.jpg";
import axios from "axios";
import Menubar from "../Components/Menubar_login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherLogin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handlesubmit = async (event) => {
      const url = "http://localhost:5000/teachers/login";
      event.preventDefault();
      try {
        const submitData = {
          username: username,
          password: password,
        };
        const response = await axios.post(url, submitData);
        console.log(response);
        const id = await response.data._id;
        console.log("id");
        console.log(id);
        if (response) {
          navigate("/teacher", {
            state: {
              username:username,
              logtype:"teacher"
            },
          });
        }
      } catch (error) {
        alert("Wrong Username or Password");
      }
    };


  return (
    <div className="background" style={{ backgroundImage: `url(${img1})` }}>
      <Menubar />
      <center>
        
        <div className="container" style={{height:"90vh"}}>
          <div
            className="cards"
            style={{ display: "flex", flexDirection: "column",alignItems:"center",backgroundColor:"transparent",height:"50%"}}
          >
           <p className="welcome" style={{fontSize:80}}>Welcome to</p>
        <p className="quizzania" style={{marginTop:-60,fontSize:130}}>Quizzania</p>
        <p className="welcome" style={{ fontSize: 30 ,marginTop:-20}}>
          Exploy the Journey of Quizzes
        </p>
          </div>
          <div
            className="cards_tworounds"
            style={{ display: "flex", flexDirection: "column",alignItems:"center" }}
          >
            <p style={{fontSize:50,color:"#F4DF25",fontWeight:500}}>Teacher Login</p>
            <img style={{margin:0}} className="img" src={require("../Images/teacher.png") } />




            <form onSubmit={handlesubmit}  style={{ margin: "auto" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ fontSize: 25, fontWeight: "bold" }}>Username</div>
              <span style={{ display: "inline-block", width: 50 }}></span>
              <input className="inputField"
                style={{ fontSize: 15 }}
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(inputUsername) => {
                  setUsername(inputUsername.target.value);
                }}
              />
            </div>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ fontSize: 25, fontWeight: "bold" }}>Password</div>
              <span style={{ display: "inline-block", width: 57 }}></span>
              <input
               
                className="inputField"
                type="password"
                name="password"
                placeholder="Enter your password"
                backgroundImage="transparent"
                value={password}
                onChange={(inputPassword) => {
                  setPassword(inputPassword.target.value);
                }}
              />
            </div>

            <br />
            <br />

            <button
              className="btnlog"
              type="submit"
              style={{ fontSize: 20, fontWeight: "bold",marginTop:-20 }}
            >
               Login
            </button>
            <p style={{ cursor: "pointer",fontWeight:"bold",marginTop:10}} onClick={
              ()=>{
                navigate("/teachersignup", {
                  
                });
              }
            }>
              <u>Do not have an account - Click Here</u>
            </p>
          </form>

          </div>
        </div>
      </center>
    </div>
  );
}

export default TeacherLogin;
