import MatchCenter from "./matchDetails/MatchCenter";
import MatchStatus from "./matchDetails/MatchStatus";
import Scoreboard from "./matchDetails/Scoreboard";
import ScoreSummary from "./matchDetails/ScoreSummary";
import "./matchStatLeftPart.scss";

const MatchStatLeftPart = () => {
  return (
    <div className="lefBox">
      <MatchStatus />
      <Scoreboard />
      <ScoreSummary />
      <MatchCenter />
    </div>
  );
};

export default MatchStatLeftPart;
