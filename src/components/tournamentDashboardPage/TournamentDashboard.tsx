import React, { useEffect, useState } from "react";
import "./tournamentDashboard.scss";
import axios from "axios";
import MatchPointCard from "../common/pointCard/MatchPointCard";
import Header from "../common/header/Header";
import sliderData from "../homepg/Slider/sliderdata";
import Spinner from "../common/spinner/Spinner";

interface MatchData {
  id: number;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  overs1: string;
  overs2: string;
  logo1: string;
  logo2: string;
  stadium: string;
  liveStatus: string;
  winMsg?: string;
  city?: string;
}

const TournamentDashboard: React.FC = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [activeTab, setActiveTab] = useState<string>("tab-1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMatchData(sliderData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true); // Show spinner while filtering
    setSelectedCity(event.target.value);

    setTimeout(() => {
      if (event.target.value === "All") {
        setMatchData(sliderData);
      } else {
        setMatchData(
          sliderData.filter((item) =>
            item.team1.toLowerCase().includes(event.target.value.toLowerCase())
          )
        );
      }
      setLoading(false); // Stop spinner after filtering
    }, 500);
  };

  const filteredCards =
    selectedCity === "All"
      ? matchData
      : matchData.filter((item) =>
          item.team1.toLowerCase().includes(selectedCity.toLowerCase())
        );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="tournamentDashPage">
      <Header subtitle="TournamentDashboard" className="innerpageHeading" />
      <div className="dashboard">
        <div className="tab-header">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === "tab-1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-1")}
              data-tab="tab1"
            >
              Matches
            </button>
            <button
              className={`tab-button ${activeTab === "tab-2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-2")}
              data-tab="tab2"
            >
              Leaderboard
            </button>
            <button
              className={`tab-button ${activeTab === "tab-3" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-3")}
              data-tab="tab3"
            >
              Points Table
            </button>
            <button
              className={`tab-button ${activeTab === "tab-4" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-4")}
              data-tab="tab4"
            >
              Stats
            </button>
            <button
              className={`tab-button ${activeTab === "tab-5" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-5")}
              data-tab="tab5"
            >
              Sponsors
            </button>
            <button
              className={`tab-button ${activeTab === "tab-6" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-6")}
              data-tab="tab6"
            >
              Teams
            </button>
            <button
              className={`tab-button ${activeTab === "tab-7" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-7")}
              data-tab="tab7"
            >
              Gallery
            </button>
            <button
              className={`tab-button ${activeTab === "tab-8" ? "active" : ""}`}
              onClick={() => handleTabClick("tab-8")}
              data-tab="tab8"
            >
              About Us
            </button>
          </div>
        </div>

        <div className="tab-main-box">
          {activeTab === "tab-1" && (
            <div className="tab-box">
              <div className="container">
                <div className="row">
                  <div className="dropdown-city">
                    Choose
                    <select
                      value={selectedCity}
                      name="city-names"
                      id="city"
                      onChange={handleCityChange}
                    >
                      <option value="All">Live</option>
                      <option value="CHENNAI SINGAMS">Chennai</option>
                      <option value="MAJHI MUMBAI">Mumbai</option>
                      <option value="TIIGERS OF KOLKATA">Kolkata</option>
                      <option value="SRINAGAR KE VEER">Srinagar</option>
                      <option value="KVN BANGALORE STRIKERS">Bangalore</option>
                      <option value="FALCON RISERS HYDERABAD">Hyderabad</option>
                    </select>
                    <button>
                      <img src="images\filterIcon.svg" alt="filter-icon" />
                    </button>
                  </div>

                  {loading ? (
                    <Spinner />
                  ) : filteredCards.length > 0 ? (
                    filteredCards.map((item) => (
                      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="filter-card-container">
                          <MatchPointCard
                            key={item.id}
                            team1={item.team1}
                            team2={item.team2}
                            score1={item.score1}
                            score2={item.score2}
                            overs1={item.overs1}
                            overs2={item.overs2}
                            logo1={item.logo1}
                            logo2={item.logo2}
                            stadium={item.stadium}
                            liveStatus={item.liveStatus}
                            // winMsg={item.winMsg}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No match data available.</p>
                  )}
                </div>
              </div>
            </div>
          )}
          {activeTab === "tab-2" && (
            <div className="tab-box">
              <h1>Leaderboard-Tab 2</h1>
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
              <h1>Sponsers-Tab 5</h1>
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
    </section>
  );
};

export default TournamentDashboard;
