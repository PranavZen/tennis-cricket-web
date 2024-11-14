import RegButton from "../../common/button/RegButton";
import "../latestBlogSection/latestBlog.scss";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="right-arrow"
  >
    <path
      fill="#ffffff"
      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
    />
  </svg>
);

const LatestBlog = () => {
  return (
    <section>
      <div className="latestBlog">
        <h6>Latest Blog</h6>

        <div className="container parent">
          <div className="row">
            <div className="news-card div1">
              <img src="images\blogImg.svg" alt="Main News Image" />
              <div className="newsCard-content">
                <h4>
                    <a href="/">
                  Tennis Ball Cricket World Unites to fight against COVID-19,
                  donates Rs. 277187
                    </a>
                </h4>
                <p>
                    <a href="/">
                  While the entire nation is still in lockdown, the tennis ball
                  cricket world takes an initiative as a social commitment to
                    </a>
                </p>
                <p>
                  <small>09:30 AM April 30, 2020</small>
                </p>
              </div>
            </div>
          </div>

          <div className="news-sidebar">
            <div className="div2">
              <a href="/">Shivshakti Pale Won Shivsena Pramukh Chashak 2016</a>
            </div>
            <div className="div3">
              <a href="/">Shivshakti Pale Won Shivsena Pramukh Chashak 2016</a>
            </div>
            <div className="div4">
              <a href="/">Shivshakti Pale Won Shivsena Pramukh Chashak 2016</a>
            </div>
          </div>
        </div>

        <div className="readmore-btn">
          <RegButton text={"Read More"} link="/" icon={arrowIcon} />
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
