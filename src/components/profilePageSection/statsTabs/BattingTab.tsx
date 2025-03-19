import { useState } from "react";
// import "../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/profilePage.scss";

interface BattingStats {
  batters: Batting;
}

interface Batting {
  fifties: number;
  hundreds: number;
  fours: number;
  sixes: number;
  highest_score: number;
  batting_average: number;
  runs: number;
  balls: number;
  innings: number;
  strike_rate: number;
  matches: number;
}

const BattingTab: React.FC<BattingStats> = ({ batters }) => {
  // const [battingData, setBattingData] = useState(true);

  // const handleIconClick = (iconType: "grid" | "list") => {
  //   if (iconType === "grid") {
  //     setBattingData(true);
  //   } else {
  //     setBattingData(false);
  //   }
  // };
  
  return (
    <div className="stats-content">
      {/* <i
        className="fa fa-th-large"
        style={{ fontSize: "2rem", cursor: "pointer" }}
        onClick={() => handleIconClick("grid")}
      ></i>
      <i
        className="fa fa-list"
        style={{ fontSize: "2rem", cursor: "pointer" }}
        onClick={() => handleIconClick("list")}
      ></i> */}

      {/* {battingData ? ( */}
      <div className="stats-container">
        <div className="stat-box">
          <span className="stat-number">{batters.fifties}</span>
          <span className="stat-label">Fifty</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.hundreds}</span>
          <span className="stat-label">Hundred</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.fours}</span>
          <span className="stat-label">Fours</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.sixes}</span>
          <span className="stat-label">Sixes</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.highest_score}</span>
          <span className="stat-label">Highest</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{Number(batters.batting_average).toFixed(2) || "0.00"}</span>
          <span className="stat-label">Average</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.runs}</span>
          <span className="stat-label">Runs</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.balls}</span>
          <span className="stat-label">Balls</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.innings}</span>
          <span className="stat-label">Innings</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{Number(batters.strike_rate).toFixed(2)}</span>
          <span className="stat-label">SR</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{batters.matches}</span>
          <span className="stat-label">Matches</span>
        </div>
      </div>
      {/* ) : ( */}
        {/* <table className="batting-table">
        <thead className="column-headers">
          <tr>
            <th>Fifty</th>
            <th>Hundred</th>
            <th>Fours</th>
            <th>Sixes</th>
            <th>Highest</th>
            <th>Average</th>
            <th>Runs</th>
            <th>Balles</th>
            <th>Innings</th>
            <th>SR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{batters.fifty}</td>
            <td>{batters.hundred}</td>
            <td>{batters.fours}</td>
            <td>{batters.sixes}</td>
            <td>{batters.highest}</td>
            <td>{batters.average}</td>
            <td>{batters.runs}</td>
            <td>{batters.balls}</td>
            <td>{batters.innings}</td>
            <td>{batters.sr}</td>
          </tr>
        </tbody>
        </table> */}
      {/* )} */}
    </div>
  );
};

export default BattingTab;
