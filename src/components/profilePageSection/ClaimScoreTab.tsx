import React, { useState } from "react";
import "../../components/profilePageSection/profilePage.scss";
import SubTabs from "../common/subTabs/SubTabs";
import BattingPerformance from "./BattingPerformance";
import BowlingPerformance from "./BowlingPerformance";
import VerficationStatus from "./VerficationStatus";
import YoutubeLinkTab from "./YoutubeLinkTab";

const ClaimScoreTab = () => {
  const [showTabs, setShowTabs] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    batting: {
      runs: "",
      balls: "",
      fours: "",
      sixes: "",
      strikeRate: "0.00",
      dismissalType: "notOut",
    },
    bowling: {
      overs: "",
      wickets: "",
      runsConceded: "",
      economyRate: "0.00",
      bestBowling: "",
    },
    youtubeLink: {
      tournament: "",
      teamName: "",
      season: "",
      matchVideoLinks: [""],
      timestamps: [{ timestampFrom: "", timestampTo: "" }],
    },
  });

  const handleSubmission = () => {
    console.log("Claim score submitted successfully");
    setActiveTabIndex(3);
  };

  const tabsData = [
    {
      label: "Batting Performance",
      component: (
        <BattingPerformance
          formData={formData.batting}
          setFormData={(data) =>
            setFormData((prev) => ({ ...prev, batting: data }))
          }
          next={() => setActiveTabIndex(1)}
        />
      ),
    },
    {
      label: "Bowling Performance",
      component: (
        <BowlingPerformance
          formData={formData.bowling}
          setFormData={(data) =>
            setFormData((prev) => ({ ...prev, bowling: data }))
          }
          next={() => setActiveTabIndex(2)}
          prev={() => setActiveTabIndex(0)}
        />
      ),
    },
    {
      label: "Youtube Link",
      component: (
        <YoutubeLinkTab
          formData={formData.youtubeLink}
          setFormData={(data) =>
            setFormData((prev) => ({ ...prev, youtubeLink: data }))
          }
          prev={() => setActiveTabIndex(1)}
          onSubmit={handleSubmission}
        />
      ),
    },
    { label: "Verification Status", component: <VerficationStatus /> },
  ];

  return (
    <>
      {!showTabs ? (
        <div className="claimScore-data">
          <div className="claim-button text-end">
            <button onClick={() => setShowTabs(true)}>+ Add Claim Score</button>
          </div>
          <div className="claim-list">
            <p>No claim score</p>
          </div>
        </div>
      ) : (
        <SubTabs
          tabs={tabsData}
          activeTabIndex={activeTabIndex}
          onTabChange={(index) => setActiveTabIndex(index)}
          // onTabChange={() => {}}
        />
      )}
    </>
  );
};

export default ClaimScoreTab;
