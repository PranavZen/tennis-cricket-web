import { Link } from "react-router-dom";
import RegButton from "../button/RegButton";
import "../banner/banner.scss";
const Banner = () => {
  return (
    <section id="banner" className="homeBanner">
      <div className="midContainer">
        <h1>TennisCricket.in</h1>
        <p>India’s First Tennis Ball Cricket Website</p>
        <div className="storeIconWrap">
          <Link to="">
            <img
              src="../images/google_store.png"
              alt="google play store"
              className="img-fluid"
            />
          </Link>
          <Link to="">
            <img
              src="../images/apple_store.png"
              alt="apple store"
              className="img-fluid"
            />
          </Link>
        </div>
        <RegButton text={"Register Now"} link="/" />
      </div>
    </section>
  );
};

export default Banner;
