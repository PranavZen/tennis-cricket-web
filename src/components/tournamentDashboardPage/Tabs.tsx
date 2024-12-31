import React from "react";

interface TabsProps {
  activeTab: string;
  tabs: { id: string; label: string }[];
  onTabClick: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, tabs, onTabClick }) => (
  <div className="tab-header">
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
);

export default Tabs;
