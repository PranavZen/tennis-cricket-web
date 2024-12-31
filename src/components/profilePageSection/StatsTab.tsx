import { useState } from "react";
import "../../components/profilePageSection/profilePage.scss";
import BattingTab from "./BattingTab";
import BowlingTab from "./BowlingTab";
import FieldingTab from "./FieldingTab";
import CaptainTab from "./CaptainTab";
import SubTabs from "../common/subTabs/SubTabs";

const StatsTab: React.FC = () => {
  const tabsData = [
    { label: "Batting", component: <BattingTab /> },
    { label: "Bowling", component: <BowlingTab /> },
    { label: "Fielding", component: <FieldingTab /> },
    { label: "Captain", component: <CaptainTab /> },
  ];

  return (
    // <>
    //   <div className="inner-tabs">
    //     <button
    //       className={`tab-btn ${statsActiveTab === "Batting" ? "active" : ""}`}
    //       onClick={() => setStatsActiveTab("Batting")}
    //     >
    //       Batting
    //     </button>
    //     <button
    //       className={`tab-btn ${statsActiveTab === "Bawling" ? "active" : ""}`}
    //       onClick={() => setStatsActiveTab("Bawling")}
    //     >
    //       Bowling
    //     </button>
    //     <button
    //       className={`tab-btn ${statsActiveTab === "Fielding" ? "active" : ""}`}
    //       onClick={() => setStatsActiveTab("Fielding")}
    //     >
    //       Fielding
    //     </button>
    //     <button
    //       className={`tab-btn ${statsActiveTab === "Captain" ? "active" : ""}`}
    //       onClick={() => setStatsActiveTab("Captain")}
    //     >
    //       Captain
    //     </button>
    //     <div className="line"></div>
    //   </div>

    //   <div className="stats-content">
    //     {statsActiveTab === "Batting" && <BattingTab />}
    //     {statsActiveTab === "Bawling" && <BowlingTab />}
    //     {statsActiveTab === "Fielding" && <FieldingTab />}
    //     {statsActiveTab === "Captain" && <CaptainTab />}
    //   </div>

    // </>

    <SubTabs tabs={tabsData} />
  );
};

export default StatsTab;
