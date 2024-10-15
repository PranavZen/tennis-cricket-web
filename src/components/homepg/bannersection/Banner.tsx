import RegButton from "../../common/button/RegButton";
import "../bannersection/banner.scss";

const Banner = () => {
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
  return (
    <section id="bannerSection">
      <div className="contentonImg">
        <div className="heading-text">
          <h6 className="overlay-text">TennisCricket.in</h6>
          <p className="overlay-line">
            India’s First Tennis Ball Cricket Website
          </p>
        </div>
        <div className="middleImg">
          <img
            className="googlePlayImg"
            src="images\googlePlayImg1.png"
            alt="googlePlay"
          />
          <img
            className="playStoreImg"
            src="images\playStoreImg2.png"
            alt="playStore"
          />
        </div>
        <div className="button-container">
          <RegButton text="Register Now" icon={arrowIcon} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
