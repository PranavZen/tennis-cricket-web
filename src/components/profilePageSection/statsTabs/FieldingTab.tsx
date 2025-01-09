import { fieldingStatsData } from "../../../mockdata/profilePageMockdata/StatsTabMockdata";
// import "../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/profilePage.scss";

const FieldingTab = () => {
  return (
    <div className="stats-content">
        <div className="stats-container">
          {fieldingStatsData.map((stat, index) => (
            <div key={index} className="stat-box">
              <span className="stat-number">{stat.score}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default FieldingTab