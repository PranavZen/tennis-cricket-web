import React from "react";
import "./Navigation.css"
// import 'pages/navigation/navigation.css';

const Navigation = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <div>
        <img className="maskGroupImg" src="images\Mask group.png" alt="img" />
        <nav>
          <div>
            <img 
                className="tennisCricketImg" src="images\tennis-cricket-logo.png" alt=""
            />
          </div>
          <div className="dropdown">
            <span>Live Score</span>
            <span>Tournament</span>
            <span>Network</span>
            <span>Media</span>
            <span>Contact Us</span>
          </div>

          <div className="searchIcon">
            <img src="images\searchIcon.png" alt="search"/>
          </div>
          <img
            className="playstoreLogo" src="images\playstoreLogo.png" alt=""
          />
          <img 
            className="img" src="images\img.png" alt=""
          />
          <div className="register">
            {/* <div className="regIcon"></div> */}
            <span className="regText">Register</span>
          </div>
        </nav>
      </div>
      {/* <!-- Hero Section --> */}
      <div>
        <div>
          <p className="overlay-text">TennisCricket.in</p>
          <p className="overlay-line">
            India’s First Tennis Ball Cricket Website
          </p>
          <div className="middleImg">
            <img
              className="googlePlayImg" src="images\googlePlayImg1.png" alt="googlePlay"
            />
            <img 
                className="playStoreImg" src="images\playStoreImg2.png" alt="playStore"
            />
          </div>
          <div className="regButton">
            <span>Register Now</span>
            <i className="fa-solid fa-arrow-right"></i> 
          </div>
        </div>
        <div>
          {/* <div class="social-icons">
            <span className="facebookIcon"><img src="images\facebookIcon.png" alt="faceBook"/></span>
            <span className="x"></span>
            <span className="linkdin"></span>
            <span className="youtube"></span>
            <span className="instagram"></span>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navigation;
