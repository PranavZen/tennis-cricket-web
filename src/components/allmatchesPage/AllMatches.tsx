import React, { useState, useEffect } from "react";
import "../allmatchesPage/allMatches.scss";
import Header from "../common/header/Header";
import Spinner from "../common/spinner/Spinner";
import CompanySection from "../homepg/footerSection/FooterSlider";
import LiveMatchDropdown from "./LiveMatchDropdown";
import MatchCard from "./MatchCard";
const AllMatches: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="allMatchPages">
      <Header subtitle="Live Cricket Matches" className="innerpageHeading" />
      <div className="matches">
        <div className="container">
          {/* <div className="row"> */}
            <div className="header-div">
              <div className="text-heading">Live Cricket Matches</div>
              <LiveMatchDropdown
                selectedCity={selectedCity}
                handleCityChange={handleCityChange}
              />
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <MatchCard />
            )}
          {/* </div> */}
        </div>
      </div>
      <CompanySection />
    </section>
  );
};

export default AllMatches;
