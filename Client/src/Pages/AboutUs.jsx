import "./CSSFiles/AboutUs.css";
import img1 from "../Images/aboutus.jpg";
import Menubar from "../Components/Menubar_beforelogin";
import Menubarafter from "../Components/Menubar_afterlogin";
import { useLocation } from "react-router-dom";

function AboutUs() {
  const location = useLocation();
  return (
    <div className="background_inabout" style={{ backgroundImage: `url(${img1})` }}>
      <div>
  {location.state && location.state.username ? (
    <Menubarafter username={location.state.username} />
  ) : (
    <Menubar />
  )}
</div>
      <div className="box_inabout">
        <center>
            <p className="aboutus">AboutUs</p>
        </center>
        <div className="flexboxabout">
        <img className="imgabout" src={require("../Images/me.png") } />
        <div style={{margin:"auto"}}>
            <center>
            <p className="bigletter">Nipuni Kumudika</p>
            <p className="mediumletter">nipunikumudika@gmail.com<br/>0719872823</p>
            <p className="smallletter">Faculty of Engineering<br/>University of Ruhuna</p>
            </center>
            
        </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
