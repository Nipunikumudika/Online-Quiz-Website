import "./CSSFiles/Quizzania.css";
import v1 from "../Videos/1.mp4";
import v2 from "../Videos/2.mp4";
import v3 from "../Videos/3.mp4";
import v4 from "../Videos/4.mp4";
import v5 from "../Videos/5.mp4";
import backgroundimg from "../Images/background.jpg";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menubar from "../Components/Menubar_beforelogin";
import Menubarafter from "../Components/Menubar_afterlogin";
import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
function Quizzania() {
  let no = 0;
  const location = useLocation();

  var slideNav = function (manual) {
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slider");
    const contents = document.querySelectorAll(".content");
    var videos = document.querySelectorAll("video");


    videos.forEach((video, i) => {
      video.currentTime = 0;
      video.play();
    });

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
  };

  useEffect(() => {
    const btns = document.querySelectorAll(".nav-btn");
    var videos = document.querySelectorAll("video");

    function changeVideo() {
      no = (no + 1) % 5;
      slideNav(no);
    }

    videos.forEach((video, i) => {
       
      
      videos[no].onended = function (e) {
        changeVideo();
        video.currentTime = 0;
        video.play();
      };
    });

    btns.forEach((btn, i) => {
        
      btn.addEventListener("click", async () => {
        slideNav(i);
       
        no = i;
      });
    });
  });

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
     <div>
  {location.state && location.state.username ? (
    <Menubarafter username={location.state.username} />
  ) : (
    <Menubar />
  )}
</div>
      <center>
        <section className="home">
          <video
            className="video-slider active"
            src={v1}
            autoPlay
            muted
          ></video>
          <video className="video-slider" src={v2} autoPlay muted></video>
          <video className="video-slider" src={v3} autoPlay muted></video>
          <video className="video-slider" src={v4} autoPlay muted></video>
          <video className="video-slider" src={v5} autoPlay muted></video>
          <div className="content active">
            <h1>Are You Ready?</h1>
          </div>
          <div className="content">
            <h1>With amazing Quizzes</h1>
          </div>
          <div className="content">
            <h1>With Stage Experience </h1>
          </div>
          <div className="content">
            <h1>As a real Competition</h1>
          </div>
          <div className="content">
            <h1>Towards the Dream os Success</h1>
          </div>

          <div className="slider-navigation">
            <div className="nav-btn active"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
          </div>
        </section>




        <p className="welcome" style={{marginTop:"50px"}} >Welcome to</p>
        <p className="quizzania">Quizzania</p>
        <p className="welcome" style={{ fontSize: 30, marginTop: -40 }}>
          Exploy the Journey of Quizzes
        </p>
        <div className="fullbox">
          <div className="round">
            100+ students
           </div>
          <div className="round">50+ Teachers</div>
          <div className="round">30+ Quizzes</div>
        </div>
<p className="welcome" style={{marginTop:"200px"}}>WIth</p>
<div className="fullbox">
          <div className="round2">
            24*7<br/>Support
           </div>
          <div className="round2">Easy<br/>Access</div>
          <div className="round2" style={{padding:"50px 0 0 0"}}>Auto Time Management</div>
          <div className="round2">Online<br/>Database</div>
        </div>
        <div style={{height:"10vh",margin:"100px"}}></div>
      </center>
    
    </div>
  );
}

export default Quizzania;
