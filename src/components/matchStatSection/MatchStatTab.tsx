import React, { useState } from "react";
import Scoreboard from "./leftSide/matchDetails/Scoreboard";
import "../matchStatSection/leftSide/matchStatLeftPart.scss";
import LiveTab from "./leftSide/matchDetails/LiveTab";

interface MatchDataProps {
  matchData: any;
}
const MatchStatTab: React.FC<MatchDataProps> = ({ matchData }) => {
  const [activeTab, setActiveTab] = useState<string>("Live");
       
  // Tabs data
  const tabs = [
    "Live",
    "Scorecard",
    "Commentary",
    "Analysis",
    "MVP",
    "Teams",
    "Photos",
  ];

  return (
    <>
      <div className="nav-tabs">
        <div className="tab-container">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                // console.log("Tab clicked:", tab);
                setActiveTab(tab);
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "Live" && <LiveTab matchData={matchData}/>}
        {activeTab === "Scorecard" && <Scoreboard matchData={matchData} />}
        {activeTab === "Commentary" && <div>Commentary content goes here</div>}
        {activeTab === "Analysis" && <div>Analysis content goes here</div>}
        {activeTab === "MVP" && <div>MVP content goes here</div>}
        {activeTab === "Teams" && <div>Teams content goes here</div>}
        {activeTab === "Photos" && <div>Photos content goes here</div>}
      </div>
    </>
  );
};

export default MatchStatTab;
