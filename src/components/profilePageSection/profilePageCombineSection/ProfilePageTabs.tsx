import { useState } from "react";
// import "../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/profilePage.scss";
import StatsTab from "../statsTabs/StatsTab";
import ProfileTab from "../profileTab/ProfileTab";
import ClaimScoreTab from "../claimScoreTabs/ClaimScoreTab";

const AllProfileTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="allWrapper">
      <div className="profile-tabs">
        <ul>
          <li
            onClick={() => setActiveTab(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            <label htmlFor="tab1" role="button">
              <span>Claim Score</span>
            </label>
          </li>
          <li
            onClick={() => setActiveTab(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            <label htmlFor="tab2" role="button">
              <span>Stats</span>
            </label>
          </li>
          {/* <li
              onClick={() => setActiveTab(3)}
              className={activeTab === 3 ? "active" : ""}
            >
              <label htmlFor="tab3" role="button">
                <span>Profile</span>
              </label>
            </li> */}
        </ul>
      </div>

      <div className="content">
        {activeTab === 1 && <ClaimScoreTab />}
        {activeTab === 2 && <StatsTab />}
        {/* {activeTab === 3 && <ProfileTab />} */}
      </div>
    </div>
  );
};

export default AllProfileTab;
