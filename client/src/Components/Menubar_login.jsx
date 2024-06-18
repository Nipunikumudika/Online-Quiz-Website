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
          }>Home</a>
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
      </div>
    </nav>
  );
}

export default Menubar;
