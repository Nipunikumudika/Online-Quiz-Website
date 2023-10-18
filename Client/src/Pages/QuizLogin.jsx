import "./CSSFiles/LogAll.css";
import img1 from "../Images/quizlogin.jpg";
import Menubar from "../Components/Menubar_afterlogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function QuizLogin() {
    const [key, setKey] = useState();
    const navigate = useNavigate();

    const location = useLocation();
    const username =location.state.username; 
    console.log("username");
    console.log(username);
    const handlesubmit = async (event) => {
      event.preventDefault();
      navigate("/quiz", {
        state: {
          key:key,
          username:location.state.username,
          logtype:location.state.logtype,
        },
      });
    };
console.log(location.state.username);



const handleLeaderboard =  () => {
  navigate("/leaderboard", {
    state: {
      keyname:key,
      username:location.state.username,
      logtype:location.state.logtype,
    },
    
  });

};



  return (
    <div className="background" style={{ backgroundImage: `url(${img1})` }}>
      <Menubar />

      <center>
        
        <div className="container">
          <div
            className="cards"
            style={{ display: "flex", flexDirection: "column",alignItems:"center" ,backgroundColor:"transparent"}}
          >
        <p className="welcome" style={{ fontSize: 30 ,marginTop:"230px",marginRight:120,position:"fixed"}}>
          Go Along
          <br/>
          Path of Success
        </p>
          </div>
          <div
            className="cards"
            style={{ display: "flex", flexDirection: "column",alignItems:"center",height:"90vh",backgroundColor:"transparent" }}
          >
            <p className="welcome">Welcome to</p>
        <p className="quizzania" style={{marginTop:-20}}>Quizzania</p>
        <div className="cards_red" >




        <form onSubmit={handlesubmit} style={{ margin: "auto" }}>

            <div style={{ display: "flex", justifyContent: "center",marginTop:"30px" }}>
              <div style={{ fontSize: 25, fontWeight: "bold" ,color:"yellow"}}>Key</div>
              <span style={{ display: "inline-block", width: 50 }}></span>
              <input className="inputField"
                style={{ fontSize: 15 }}
                type="text"
                name="key"
                placeholder="Enter your key"
                value={key}
                onChange={(inputKey) => {
                  setKey(inputKey.target.value);
                }}
              />
            </div>
            <br />
            <br />
            
            <button
              className="btnlog"
              type="submit"
              style={{ fontSize: 20, fontWeight: "bold",marginTop:-25 ,backgroundColor:"red",width:"250px",color:"yellow"}}
            >
               Join to Quiz
            </button>
         
          </form>
          <button
              className="btnlog"
              onClick={handleLeaderboard}
                
                
              style={{ fontSize: 20, fontWeight: "bold",marginTop:10 ,backgroundColor:"red",width:"250px",color:"yellow",margin:"5px"}}
            >
              Check Leaderboard
            </button>
        </div>
        <p className="welcome" style={{ fontSize: 60,marginRight:-500 }}>
          Good Luck !
        </p>
          </div>
        </div>
      </center>
    </div>
  );
}

export default QuizLogin;
