import { Link } from "react-router-dom";
import RegButton from "../button/RegButton";
import "../banner/banner.scss";

interface BannerProps {
  subtitle: string;
  style?: React.CSSProperties;
}

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="right-arrow"
  >
    <path
      fill="#416D3D"
      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
    />
  </svg>
);

const Banner: React.FC<BannerProps> = ({ subtitle, style }) => {
  return (
    <section id="banner" className="homeBanner">
      <div className="midContainer">
        <h1 className='banner-heading' style={style}>{subtitle}</h1>
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
        <RegButton text={"Register Now"} link="/" icon={arrowIcon}/>
      </div>
    </section>
  );
};

export default Banner;