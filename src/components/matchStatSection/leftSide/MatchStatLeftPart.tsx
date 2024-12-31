import MatchCenter from "./matchDetails/MatchCenter";
import MatchStatus from "./matchDetails/MatchStatus";
import Scoreboard from "./matchDetails/Scoreboard";
import ScoreSummary from "./matchDetails/ScoreSummary";
import "./matchStatLeftPart.scss";

interface MatchDataProps {
  matchData : any;
}

const MatchStatLeftPart: React.FC<MatchDataProps> = ({ matchData }) => {

  console.log("matchDatamatchDataqqqqqqq",matchData);
  return (
    <div className="lefBox">
      <MatchStatus matchData={matchData}/>
      {/* <Scoreboard /> */}
      <ScoreSummary />
      <MatchCenter />
    </div>
  );
};

export default MatchStatLeftPart;
