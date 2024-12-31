import "../../components/profilePageSection/profilePage.scss";
import { bowlingStatsData } from "../../mockdata/profilePageMockdata/StatsTabMockdata";
const BowlingTab = () => {
  return (
    <div className="stats-content">
        <div className="stats-container">
          {bowlingStatsData.map((stat, index) => (
            <div key={index} className="stat-box">
              <span className="stat-number">{stat.score}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default BowlingTab