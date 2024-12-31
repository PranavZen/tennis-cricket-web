import React, { useEffect, useState } from "react";
import "./tournamentDashboard.scss";
import Header from "../common/header/Header";
import sliderData from "../homepg/Slider/sliderdata";
import Tabs from "./Tabs";
import LeaderBoardTab from "./leaderboardTab/LeaderBoardTab";
import MatchesTab from "./matchesTab/MatchesTab";
import TeamNmaeDropdown from "./matchesTab/TeamNameDropdown";
import Dropdown from "./leaderboardTab/Dropdown";

interface MatchData {
  id: number;
  // team1: string;
  // team2: string;
  // score1: string;
  // score2: string;
  // overs1: string;
  // overs2: string;
  // logo1: string;
  // logo2: string;
  // stadium: string;
  // liveStatus: string;
  // winMsg?: string;
  // city?: string;
}

const TournamentDashboard: React.FC = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [selectedCity, setSelectedCity] = useState("All");
  // const [selectType, setSelectType] = useState("Select");
  // const [selectStyle, setSelectStyle] = useState("All Style");
  const [activeTab, setActiveTab] = useState<string>("tab-1");
  const [loading, setLoading] = useState(true);

  const tabs = [
    { id: "tab-1", label: "Matches" },
    { id: "tab-2", label: "Leaderboard" },
    { id: "tab-3", label: "Points Table" },
    { id: "tab-4", label: "Stats" },
    { id: "tab-5", label: "Sponsors" },
    { id: "tab-6", label: "Teams" },
    { id: "tab-7", label: "Gallery" },
    { id: "tab-8", label: "About Us" },
  ];

  const cities = [
    "CHENNAI SINGAMS",
    "MAJHI MUMBAI",
    "TIIGERS OF KOLKATA",
    "SRINAGAR KE VEER",
    "KVN BANGALORE STRIKERS",
    "FALCON RISERS HYDERABAD",
  ];

  useEffect(() => {
    setTimeout(() => {
      setMatchData(sliderData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);

    setTimeout(() => {
      if (selectedCity === "All") {
        setMatchData(sliderData);
      } else {
        setMatchData(
          sliderData.filter((item) =>
            item.team1.toLowerCase().includes(selectedCity.toLowerCase())
          )
        );
      }
      setLoading(false);
    }, 500);
  };

  // const handelTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setLoading(true);
  //   const selectType = event.target.value;
  //   setSelectType(selectType);
  // };

  // const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setLoading(true);
  //   const selectStyle = event.target.value;
  //   setSelectStyle(selectStyle);
  // }

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="tournamentDashPage">
      <Header subtitle="TournamentDashboard" className="innerpageHeading" />
      <div className="container">
        <div className="dashboard">
          <Tabs activeTab={activeTab} tabs={tabs} onTabClick={handleTabClick} />

          <div className="tab-main-box">
            {activeTab === "tab-1" && (
              <div>
                <TeamNmaeDropdown
                  selectedCity={selectedCity}
                  cities={["All", ...cities]}
                  onCityChange={handleCityChange}
                />
                <MatchesTab />
              </div>
            )}
            {activeTab === "tab-2" && (
              <div>
                {/* <Dropdown
                  selectType={selectType}
                  handelTypeChange={handelTypeChange}
                  selectStyle={selectStyle}
                  handleStyleChange={handleStyleChange}
                /> */}
                <LeaderBoardTab />
              </div>
            )}
            {activeTab === "tab-3" && (
              <div className="tab-box">
                <h1>Points Table-Tab 3</h1>
              </div>
            )}
            {activeTab === "tab-4" && (
              <div className="tab-box">
                <h1>Stats-Tab 4</h1>
              </div>
            )}
            {activeTab === "tab-5" && (
              <div className="tab-box">
                <h1>Sponsors-Tab 5</h1>
              </div>
            )}
            {activeTab === "tab-6" && (
              <div className="tab-box">
                <h1>Teams-Tab 6</h1>
              </div>
            )}
            {activeTab === "tab-7" && (
              <div className="tab-box">
                <h1>Gallery-Tab 7</h1>
              </div>
            )}
            {activeTab === "tab-8" && (
              <div className="tab-box">
                <h1>About Us-Tab 8</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentDashboard;
