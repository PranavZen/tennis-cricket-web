import React from "react";
import "../../common/pointCard/matchPointerCard.scss";

interface PointerCardProps {
  id?: number;
  category?: string;
  team1: string;
  team2: string;
  score1: string;
  wicket1?: string;
  wicket2?: string;
  score2: string;
  overs1: string;
  overs2: string;
  logo1: string;
  logo2: string;
  stadium?: string;
  place?: string;
  date?: number;
  starts?: string;
  liveStatus?: string;
  winMsg?: any;
  electedToBat?: any;
  city?: any;
  showStadiumInfo?: boolean;
}

const MatchPointCardTop: React.FC<PointerCardProps> = ({
  category,
  team1,
  team2,
  logo1,
  score1,
  wicket1,
  wicket2,
  overs1,
  logo2,
  score2,
  overs2,
  stadium,
  place,
  date,
  starts,
  liveStatus,
  winMsg,
  electedToBat,
  showStadiumInfo = true,
}) => {
  return (
    <div className="wrap-content">
      <div className="topContainer">
        <div className="scoreboard">
          {category && (
            <div className="category">
              <p className="category-text">{category}</p>
            </div>
          )}
          <div className="win-msg">
            <p>{winMsg ? `${winMsg} won the toss` : ""}</p>
          </div>
          <div className="match-info">
            <span className="team-name1">{team1}</span>
            <span className="team-vs">Vs</span>
            <span className="team-name2">{team2}</span>
          </div>

          <div className="scores-top-card">
            <div className="team-score team-left">
              <img className="team-logo1" src="https://dummyimage.com/150x150/ffffff/000&text=Team+A" alt="Team 1 Logo" />
              <div className="score-details">
                <span className="runs">
                  {score1 ? `${score1}/${wicket1 || "0"}` : ""}
                </span>
                <span className="overs">{overs1 ? `${overs1} OV` : ""}</span>
              </div>
            </div>
            {/* <div className="score-vs">Vs</div> */}
            <div className="team-score team-right">
              <img className="team-logo2" src="https://dummyimage.com/150x150/ffffff/000&text=Team+B" alt="Team 2 Logo" />
              <div>
                <span className="runs">
                  {score2 ? `${score2}/${wicket2 || "0"}` : ""}
                </span>
                <span className="overs">{overs2 ? `${overs2} OV` : ""}</span>
              </div>
            </div>
          </div>

          {/* <p>{electedToBat}</p> */}
          {showStadiumInfo && (
            <div className="stadium-info">
              <div className="stadium-name">
                <p>{stadium}</p>
                <p>{place}</p>
                <p>{date}</p>
                <p>{starts}</p>
              </div>
              <div className="live-status">{liveStatus}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchPointCardTop;