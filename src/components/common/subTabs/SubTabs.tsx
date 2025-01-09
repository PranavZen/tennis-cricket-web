import React, { useState } from "react";

interface TabsProps {
  tabs: {
    label: string;
    component: React.ReactNode;
  }[];
  activeTabIndex?: number;
  onTabChange?: (index: number) => void;
}

const SubTabs: React.FC<TabsProps> = ({ tabs, activeTabIndex, onTabChange }) => {
  const [internalActiveTab, setInternalActiveTab] = useState(0);
  const activeTab = activeTabIndex !== undefined ? activeTabIndex : internalActiveTab;

  const handleTabChange = (index: number) => {
    if (onTabChange) {
      onTabChange(index);
    } else {
      setInternalActiveTab(index);
    }
  };

  return (
    <div className="tabs-container">
      <div className="inner-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={`tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </button>
        ))}
        {/* <div className="line"></div> */}
      </div>

      <div className="stats-content">
        {tabs[activeTab] && tabs[activeTab].component}
      </div>
    </div>
  );
};

export default SubTabs;
