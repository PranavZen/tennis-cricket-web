import React, { useEffect, useState } from "react";
import "../allmatchesPage/allMatches.scss";
import MatchPointCard from "../common/pointCard/MatchPointCard";
import Header from "../common/header/Header";
import Spinner from "../common/spinner/Spinner";
import CompanySection from "../homepg/footerSection/FooterSlider";
import sliderData from "../homepg/Slider/sliderdata";

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

const AllMatches = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMatchData(sliderData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const filteredCards =
    selectedCity === "All"
      ? matchData
      : matchData.filter((item) => item.team1.toLowerCase().includes(selectedCity.toLowerCase()));

  return (
    <section className="allMatchPages">
      <Header subtitle="Live Cricket Matches" className="innerpageHeading" />
      <div className="matches">
        <div className="container">
          <div className="row">
            <div className="header-div">
              <div className="text-heading">Live Cricket Matches</div>
              <div className="dropdown">
                Choose Location
                <select
                  value={selectedCity}
                  name="city-names"
                  id="city"
                  onChange={handleCityChange}
                >
                  <option value="All">All</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>
            </div>

            {loading ? (
              <Spinner />
            ) : filteredCards.length > 0 ? (
              filteredCards.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
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
      <CompanySection />
    </section>
  );
};

export default AllMatches;
