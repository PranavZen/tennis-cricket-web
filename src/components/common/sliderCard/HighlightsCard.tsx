import React from "react";
import { Link } from "react-router-dom";
import "../sliderCard/highlightsCard.css";

interface CardProps {
  id: number;
  title: string;
  mainTitle?: string;
  backgroundImg?: string;
  thumbnail: string;
  date: string;
  matchLink?: string;
  shareLink?: string;
  timeText?: string;
  target?: string;
  datafancybox?: string;
  url: string;
}

const HighlightsCard: React.FC<CardProps> = ({
  title,
  mainTitle,
  backgroundImg,
  thumbnail,
  date,
  matchLink,
  shareLink,
  timeText,
  target,
  datafancybox,
  url,
}) => {
  return (
    <div className="position-relative">
      <div className="cardInner">
        <Link
          to={matchLink || "#"}
          className="cardAllWrap"
          data-fancybox={datafancybox}
        >
          <div className="imgWrap">
            <img src={backgroundImg} alt={mainTitle} className="img-fluid" loading="lazy" />
            <div className="playBtn">
              <span>
                {/* <img src={playIc} alt="Play" /> */}
              </span>
            </div>
          </div>
          <div className="midBox">
            {/* <p>{title}</p> */}
            <h5>{mainTitle}</h5>
          </div>
          {/* <div className="footBox">
            <span className="dateBox">{date}</span>
          </div> */}
        </Link>
      </div>
    </div>
  );
};

export default HighlightsCard;
