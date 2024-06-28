import { Route, Routes, useNavigate } from "react-router-dom";

import "./Menubar.scss";


function Menubar() {
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
                
              });
            }
          }>Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={
            ()=>{
              navigate("/aboutus", {
                
              });
            }
          }>About-Us</a>
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
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                navigate("/login", {
                  state: {
                    playPiano: 0,
                  },
                });
              }}
              style={{ marginRight: "30px" }}
            >
              LogIn
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                navigate("/signup", {
                  state: {
                    playPiano: 0,
                  },
                });
              }}
              style={{ marginRight: "50px" }}
            >
              SignUp
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Menubar;
