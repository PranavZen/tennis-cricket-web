import React, { useEffect } from "react";
import MatchStatTab from "../../MatchStatTab";

interface Match {
  no: number;
  teamName?: string;
  score?: string;
  rr?: string;
  teamA: string;
  teamB: string;
  tossWon: string;
  ground: string;
  place: string;
  date: string;
  starts: string;
  electedToBat: string;
  inning1: {
    team_name: string;
    runs: string;
    wickets: string
    overs: string;
  };
  inning2: {
    team_name: string;
    runs: string;
    overs: string;
    wickets: string;
  };
}

interface MatchDataProps {
  matchData: Match[];
}

const MatchStatus: React.FC<MatchDataProps> = ({ matchData }) => {
  // console.log("matchData", matchData);

  return (
    <>
      <div className="match-container">
   
        {matchData?.length >= 0 ? (
          matchData.map((elem, index) => {
            // console.log("Elementttttttt ", elem);
            return (
              <div key={index}>

                <div className="match-status">
                  <span className="live-text">Live</span>
                  <span className="live-dot">•</span>
                  <span className="match-details">
                    {elem.tossWon} won the toss
                  </span>
                </div>

                <div className="team-section">
                  {/* Team 1 */}
                  <div className="team">
                    <div className="left-part">
                      {/* <img
                        src="/images/kolkataTiger1.png"
                        alt="Tiigers of Kolkata"
                        className="team-logo2"
                      /> */}
                      <span className="team-name">{elem.teamA}</span>
                    </div>
                    <div className="team-info">
                      <span className="team-score">{elem.electedToBat === elem.teamA ? `${elem.inning1.runs ?? "0"}/${elem.inning1.wickets ?? "0"}`: `${elem.inning2.runs ?? "0"}/${elem.inning2.wickets ?? "0"}`}</span>
                      <span className="team-rr"> {elem.electedToBat === elem.teamA? (elem.inning1.overs ? `(${elem.inning1.overs} OV)` : ""): (elem.inning2.overs ? `(${elem.inning2.overs} OV)` : "")}</span>
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div className="team">
                    <div className="left-part" style={{ marginRight: "4rem" }}>
                      {/* <img
                        src="images/majhiMumbaiLogo.png"
                        alt="Majhi Mumbai"
                        className="team-logo1"
                      /> */}
                      <span className="team-name">{elem.teamB}</span>
                    </div>
                    <div className="team-info">
                      <span className="team-score">{elem.electedToBat === elem.teamB? `${elem.inning1.runs ?? "0"}/${elem.inning1.wickets ?? "0"}`: `${elem.inning2.runs ?? "0"}/${elem.inning2.wickets ?? "0"}`}</span>
                      <span className="team-rr">{elem.electedToBat === elem.teamB? (elem.inning1.overs ? `(${elem.inning1.overs} OV)` : ""): (elem.inning2.overs ? `(${elem.inning2.overs} OV)` : "")}</span>
                    </div>
                  </div>

                  {/* {Match Venue} */}
                  {/* <div className="match-details">
                    <p>{`${elem.ground}, ${elem.place}, ${elem.date}, ${elem.starts}`}</p>
                  </div> */}

                  <div className="match-stats">
                    Current RR: 7.30 Last 5 ov (RR): 41/5 (8.20)
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No matches available</p>
        )}

        <MatchStatTab matchData={matchData}/>
       
      </div>
    </>
  );
};

export default MatchStatus;
