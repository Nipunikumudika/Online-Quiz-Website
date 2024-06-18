import "./CSSFiles/LogAll.css";
import img1 from "../Images/login.jpg";
import axios from "axios";
import Menubar from "../Components/Menubar_login";
import { useState } from "react";
import {useNavigate } from "react-router-dom";


function StudentSignup() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleCreateStudent = async (event) => {
      const postURL = "http://localhost:5000/students";
      event.preventDefault();
      try {
        const submitData = {
          username: username,
          password: password,
        };
    
        const response = await axios.post(postURL, submitData);
        console.log(response);
        alert("user added successfully");
        setUsername("");
        setPassword("");
        navigate("/quizlogin", {
          state: {
            username:username,
            logtype:"student"
          },
        });
      } catch (error) {
        alert("Try using different username");
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
            <p style={{fontSize:50,color:"#F4DF25",fontWeight:500}}>Student SignUp</p>
            <img style={{margin:0}} className="img" src={require("../Images/student.png") } />




            <form  onSubmit={handleCreateStudent} style={{ margin: "auto" }}>
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
               SignUp
            </button>
            <p style={{ cursor: "pointer",fontWeight:"bold",marginTop:10}} onClick={
              ()=>{
                navigate("/studentlogin", {
                  
                });
              }
            } >
              <u>Do you have an account - Click Here</u>
            </p>
          </form>

          </div>
        </div>
      </center>
    </div>
  );
}

export default StudentSignup;
