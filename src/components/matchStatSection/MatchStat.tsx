import Header from "../common/header/Header";
import MatchStatLeftPart from "./leftSide/MatchStatLeftPart";
import "./matchStat.scss";
import MatchStatRightPart from "./rightSide/MatchStatRightPart";

const MatchStat = () => {
  return (
    <section className="matchStat">
      <Header subtitle="Live Cricket Matches" className="innerpageHeading" />
      <div className="container">
        <div className="matchStat-leftPart">
          <div className="heading">
            <p>
              Majhi Mumbai Vs Tiigers Of Kolkata | 3rd T20I at Mumbai, Sep 24
              2024 - Live Cricket Score{" "}
            </p>
          </div>

          <div className="combine-Part">
            <MatchStatLeftPart />
            <MatchStatRightPart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchStat;
