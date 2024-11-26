import LineChart from "../../common/chart/Chart";
import ImageContainer from "./matchDetails/ImageContainer";
import MatchDetails from "./matchDetails/MatchDetails";
import MatchNotes from "./matchDetails/MatchNotes";
import "./matchStatRightPart.scss";

const MatchStatRightPart = () => {
  return (
    <div className="rightBox">
      <ImageContainer />
      <div className="graph-img">
        <LineChart />
      </div>
      <MatchDetails />
      <MatchNotes />
    </div>
  );
};

export default MatchStatRightPart;
