
import LineChart from "../../components/common/chart/Chart";
import "../matchStatSection/matchStatRightPart.scss";

const MatchStatRightPart = () => {
  return (
    <div className="rightBox">
      <div className="matchStatRightPart">
        <div className="image-container">
          <img src="images\imageStat1.png" alt="image-stat1" />
        </div>

        <div className="graph-img">
          <LineChart/>
        </div>

        <div className="match-details-card">
          <h3 className="match-details-header">Match Details</h3>
          <div className="match-detail">
            <span className="detail-label">Toss</span>
            <span className="detail-value">Tiigers of Kolkata</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Series</span>
            <span className="detail-value">Untda Premier League</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Match days</span>
            <span className="detail-value">25/09/2024</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Umpires</span>
            <span className="detail-value">Goutham</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Location</span>
            <span className="detail-value">Oontra Ground, Ajmer</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Last Update</span>
            <span className="detail-value">2024-09-25 at 13:31</span>
          </div>
        </div>

        <div className="match-details-card">
          <h3 className="match-details-header">Match Notes</h3>
          <div className="match-notes">
            <p className="detail-value">Match started at 25 Sep, 01:07 PM.</p>
          </div>
          <div className="match-notes">
            <p className="detail-value">
              Untda Dhani: 53 runs in 5.2 overs, Extras 5
            </p>
          </div>
          <div className="match-notes">
            <p className="detail-value">
              Innings Break: Untda Dhani - 81/6 in 8 overs (Arbaaz Murad 17,
              Sajid 9)
            </p>
          </div>
          <div className="match-notes">
            <p className="detail-value">Innings Ended at 25 Sep, 01:34 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStatRightPart;
