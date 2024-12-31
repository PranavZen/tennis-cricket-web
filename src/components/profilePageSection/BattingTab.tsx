import "../../components/profilePageSection/profilePage.scss";
import { battingStatsData } from '../../mockdata/profilePageMockdata/StatsTabMockdata'

const BattingTab = () => {
  return (
    <div className="stats-content">
            <div className="stats-container">
              {battingStatsData.map((stat, index) => (
                <div key={index} className="stat-box">
                  <span className="stat-number">{stat.score}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
  )
}

export default BattingTab