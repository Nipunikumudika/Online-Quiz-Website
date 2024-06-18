import { Route, Routes, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Menubar.scss";
import personicon from "../Images/me.png";

function Menubar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <p className="brand">
          Quizzania{" "}
        </p>
        <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={
            ()=>{
              navigate("/", {
                state: {
                  username: location.state.username,
                  logtype:location.state.logtype,
                },
              });
            }
          }>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={
            ()=>{
              navigate("/aboutus", {
                state: {
                  username: location.state.username,
                  logtype:location.state.logtype,
                },
              });
            }
          }>About-Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={
            ()=>{
              if (location.state && location.state.logtype === "student") {
             
                navigate("/quizlogin", {
                  state: {
                    username: location.state.username,
                    logtype: location.state.logtype,
                  },
                });
              } else {
           
                navigate("/teacher", {
                  state: {
                    username: location.state.username,
                    logtype: location.state.logtype,
                  },
                });
            }
          }
          }>Dashboard</a>
        </li>
      </ul>
    </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
          <span>
          <span>
              <div style={{display:"flex"}}>
              <p className="username"><img className="personicon" src={personicon}></img>&nbsp;&nbsp;{location.state.username}</p>
            <button type="button" onClick={() => navigate("/")} className="btn btn-secondary" style={{marginRight:"30px",width:"130px",border:"2px solid white"}}>Sign Out</button>
              </div>
             
            </span>
           
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Menubar;
