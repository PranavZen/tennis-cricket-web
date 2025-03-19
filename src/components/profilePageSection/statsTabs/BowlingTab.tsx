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
  bowling_average: number;
  bowling_economy_rate: number;
  matches: number;
  best_BBF: number;
  bowling_strike_rate: number;
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
          <span className="stat-number">{Number(bowlers.bowling_average).toFixed(2) || "0.00"}</span>
          <span className="stat-label">Average</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{Number(bowlers.bowling_economy_rate).toFixed(2) || "0.00"}</span>
          <span className="stat-label">Economy</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.matches}</span>
          <span className="stat-label">Matches</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.best_BBF}</span>
          <span className="stat-label">Best Bowling Figure</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{bowlers.bowling_strike_rate}</span>
          <span className="stat-label">Strike Rate</span>
        </div>
      </div>
    </div>
  );
};

export default BowlingTab;
