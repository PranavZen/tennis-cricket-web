// import "../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/profilePage.scss";

interface BowlingStats {
  bowlers: Bowling;
}

interface Bowling {
  innings: number;
  balls: number;
  over: number;
  runs: number;
  maidens: number;
  wickets: number;
  average: number;
  economy: number;
}

const BowlingTab: React.FC<BowlingStats> = ({ bowlers }) => {
  return (
    <div className="stats-content">
      <div className="stats-container">
        <div className="stat-box">
          <span className="stat-number">{bowlers.innings}</span>
          <span className="stat-label">Innings</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.balls}</span>
          <span className="stat-label">Balls</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.over}</span>
          <span className="stat-label">Over</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.runs}</span>
          <span className="stat-label">Runs</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.maidens}</span>
          <span className="stat-label">Maidens</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.wickets}</span>
          <span className="stat-label">Wickets</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{Number(bowlers.average).toFixed(2) || "0.00"}</span>
          <span className="stat-label">Average</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{Number(bowlers.economy).toFixed(2) || "0.00"}</span>
          <span className="stat-label">Economy</span>
        </div>
      </div>
    </div>
  );
};

export default BowlingTab;
