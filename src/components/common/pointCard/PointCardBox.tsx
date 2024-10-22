import React from "react";

interface PointerCardProps {
  id?: number;
  category?: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  overs1: string;
  overs2: string;
  logo1: string;
  logo2: string;
  stadium: string;
  liveStatus: string;
  winMsg?: any;
  city?: any;
}

const PointCardBox: React.FC<PointerCardProps> = ({
  category,
  team1,
  team2,
  logo1,
  score1,
  overs1,
  logo2,
  score2,
  overs2,
  stadium,
  liveStatus,
  winMsg,
}) => {
  return (
    <div>
      <div className="topContainer">
        <div className="scoreboard">
          {category && (
            <div className="category">
              <p className="category-text">{category}</p>
            </div>
          )}
          <div className="match-info">
            <span className="team-name1">{team1}</span>
            <span className="team-vs">Vs</span>
            <span className="team-name2">{team2}</span>
          </div>
          <div className="scores">
            <div className="team-score team-left">
              <img className="team-logo1" src={logo1} alt="Team 1 Logo" />
              <div className="score-details">
                <span className="runs">{score1}</span>
                <span className="overs">{overs1}</span>
              </div>
            </div>
            <div className="score-vs">Vs</div>
            <div className="team-score team-right">
              <img className="team-logo2" src={logo2} alt="Team 2 Logo" />
              <div>
                <span className="runs">{score2}</span>
                <span className="overs">{overs2}</span>
              </div>
            </div>
          </div>
          <p>{winMsg}</p>
          <div className="stadium-info">
            <span className="stadium-name">{stadium}</span>
            <span className="live-status">{liveStatus}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointCardBox;
