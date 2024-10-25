import { Link } from "react-router-dom";
import "../promocardSection/promoCard.scss";
import RegButton from "../../common/button/RegButton";

// interface CardProps {
//   matchLink: string;
//   url: string;
//   datafancybox: string;
// }

const PromoCard = () => {
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
    <section className="wrapper">
      <div className="midSectionWrap">
      <div className="popVideoWrap">
        <Link
          to="https://youtu.be/7ucE8BAychI?feature=shared"
          className="cardAllWrap"
          // data-fancybox={datafancybox}
        >
          <div className="imgWrap">
            <img
              src="https://my.ispl-t10.com/images/videos/thumbnail/G6xqZDcENbrDJvfQtijojv9RGQUBa1C2JrOcA5jq.jpg"
              className="img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="playBtn">
              <img src="images\playIcon.png" alt="play-icon" />
            </div>
          </div>
        </Link>
      </div>
      <div className="heading-content">
        <h6>Join Tenniscricket Team</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{" "}
        </p>
        <div className="button-container">
          <RegButton text="Register Now" icon={arrowIcon} />
        </div>
      </div>
      </div>
    </section>
  );
};

export default PromoCard;

{
  /* <section className="wrapper">
<div className="position-relative">
<div className="cardInner">
  <Link
    to={"https://youtu.be/7ucE8BAychI?feature=shared"}
    className="cardAllWrap"
    // data-fancybox={datafancybox}
  >
    <div className="imgWrap">
      <img src="https://my.ispl-t10.com/images/videos/thumbnail/G6xqZDcENbrDJvfQtijojv9RGQUBa1C2JrOcA5jq.jpg" 
       className="img-fluid" loading="lazy" />
      <div className="playBtn">
          <img src="images\playIcon.png" alt="play-icon"/>
      </div>
    </div>
  </Link>
</div>
</div>
</section> */
}
