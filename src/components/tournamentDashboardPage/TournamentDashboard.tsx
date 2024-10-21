import React, { useEffect, useState } from "react";
import "./tournamentDashboard.css";
import PointCard from "../common/pointCard/PointCard";
import axios from "axios";

interface MatchData {
  id: number;
  category_name: string;
  from_team_name: string;
  to_team_name: string;
  team_one_scrore: string;
  team_one_wicket: string;
  team_two_scrore: string;
  team_two_wicket: number;
  team_one_over: string;
  team_two_over: string;
  from_team_logo: string;
  to_team_logo: string;
  stadium_name: string;
  //   match_fixture_status_name: string;
  liveStatus: string;
  //   winMsg: any;
  //   city: string;
}

const TournamentDashboard: React.FC = () => {

  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [activeTab, setActiveTab] = useState<string>("tab-1");

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await axios.get(
          `https://my.ispl.popopower.com/api/matches/results`
        );

        console.log("API Response:", response);

        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.result)
        ) {
          setMatchData(response.data.data.result);
        } else {
          console.error("Result data is not an array");
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };

    fetchMatchData();
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const filteredCards =
    selectedCity === "All"
      ? matchData
      : matchData.filter((item) => item.from_team_name === selectedCity);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section>
        <div className="tab-header mb-4">
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

        <div className="dropdown">
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
            <img src="images\filterIcon.svg" alt="filter-icon"/>
          </button>
        </div>
        </div>
        
        <div>
          <div className="tab-main-box">
            {activeTab === "tab-1" && (
              <div className="tab-box">

                <div className="container">
        <div className="row">
          {filteredCards.length > 0 ? (
            filteredCards.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="filter-card-container">
                  <PointCard
                    id={item.id}
                    category={item.category_name}
                    team1={item.from_team_name}
                    team2={item.to_team_name}
                    score1={`${item.team_one_scrore}/${item.team_one_wicket}`}
                    score2={`${item.team_two_scrore}/${item.team_two_wicket}`}
                    overs1={item.team_one_over}
                    overs2={item.team_two_over}
                    logo1={`https://my.ispl-t10.com/images/team-master/teams/${item.from_team_logo}`}
                    logo2={`https://my.ispl-t10.com/images/team-master/teams/${item.to_team_logo}`}
                    stadium={item.stadium_name}
                    liveStatus={item.liveStatus}
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
                <h1>Leaderboard</h1>
              </div>
            )}
            {activeTab === "tab-3" && (
              <div className="tab-box">
                <h1>Points Table</h1>
              </div>
            )}
            {activeTab === "tab-4" && (
              <div className="tab-box">
                <h1>Stats</h1>
              </div>
            )}
            {activeTab === "tab-5" && (
              <div className="tab-box">
                <h1>Sponsers</h1>
              </div>
            )}
            {activeTab === "tab-6" && (
              <div className="tab-box">
                <h1>Teams</h1>
              </div>
            )}
            {activeTab === "tab-7" && (
              <div className="tab-box">
                <h1>Gallery</h1>
              </div>
            )}
            {activeTab === "tab-8" && (
              <div className="tab-box">
                <h1>About Us</h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TournamentDashboard;
