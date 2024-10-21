import React from "react";
import "./tournamentCard.css";

interface TournamentCardProps {
    id: number,
    cricketLogo : string,
    matchStatus : string,
    matchTitle : string,
    calenderIcon : string,
    matchDate : string,
    locationIcon : string,
    matchLocation : string
  }

const TournamentCard: React.FC<TournamentCardProps> = ({
    cricketLogo,
    matchStatus,
    matchTitle,
    calenderIcon,
    matchDate,
    locationIcon,
    matchLocation
}) => {
  return (
    <section>
      <div className="match-card">
        <div className="border-container">
          <img src={cricketLogo} alt="Cricket-Logo" />
        </div>

        <div className="match-card-info">
          <span className="status-label ongoing">{matchStatus}</span>
          <h3 className="match-title">{matchTitle}</h3>
          <div className="match-details">
            <p>
                <img src={calenderIcon} alt="calender-icon"/>
                {matchDate}
            </p>
            <p>
                <img src={locationIcon} alt="location-icon"/>
                 {matchLocation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentCard;
