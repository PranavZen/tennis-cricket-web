import LineChart from "../../common/chart/Chart";
import ImageContainer from "./matchDetails/ImageContainer";
import MatchDetails from "./matchDetails/MatchDetails";
import MatchNotes from "./matchDetails/MatchNotes";
import "./matchStatRightPart.scss";

interface MatchDataProps {
  matchData : any;
}

const MatchStatRightPart: React.FC<MatchDataProps> = ({ matchData }) => {
  return (
    <div className="rightBox">
      <ImageContainer />
      <div className="graph-img">
        <LineChart />
      </div>
      <MatchDetails matchData={matchData}/>
      <MatchNotes />
    </div>
  );
};

export default MatchStatRightPart;
