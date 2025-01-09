import { captainStatsData } from "../../../mockdata/profilePageMockdata/StatsTabMockdata";
// import "../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/profilePage.scss";

const CaptainTab = () => {
  return (
    <div className="stats-content">
        <div className="stats-container">
          {captainStatsData.map((stat, index) => (
            <div key={index} className="stat-box">
              <span className="stat-number">{stat.score}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CaptainTab