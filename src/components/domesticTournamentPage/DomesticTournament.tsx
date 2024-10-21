import { useState, useEffect } from "react";
import TournamentCard from "../common/tournamentCard/TournamentCard";
import './domesticTournament.css';
import data from "./data";

interface TournamentData {
  id: number;
  cricketLogo: any;
  matchStatus: string;
  matchTitle: string;
  calenderIcon: string;
  matchDate: string;
  locationIcon: string;
  matchLocation: string;
}

const DomesticTournament = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(data);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleStatusFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedStatus((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    const filteredCards = data.filter((TournamentData) => {
      return (
        (selectedStatus.length === 0 || selectedStatus.includes(TournamentData.matchStatus)) &&
        (selectedCity === "All" || TournamentData.matchLocation.includes(selectedCity))
      );
    });
    setFilteredData(filteredCards);
  }, [selectedCity, selectedStatus]); // Re-run filtering when selected city or status changes

  return (
    <section>
      <div className="header-div mb-4">
        <div className="dropdown">
          Choose Location
          <select
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="All">All</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Srinagar">Srinagar</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hydrabad">Hydrabad</option>
          </select>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search Tournament" name="search" />
          <button type="submit" className="search-icon">
            <img src="images/searchIcon.svg" alt="search-icon" />
          </button>

          <button onClick={() => setIsFilterOpen(true)} className="filter-icon">
            <img src="images\filterIcon.svg" alt="filter-icon" />
          </button>
        </div>
      </div>

      {isFilterOpen && (
          <div className="filter-content">
            <div>
            <label>
              <input type="checkbox" value="Ongoing" onChange={handleStatusFilter} /> Ongoing
            </label>
            <label>
              <input type="checkbox" value="Upcoming" onChange={handleStatusFilter} /> Upcoming
            </label>
            <label>
              <input type="checkbox" value="Cancelled" onChange={handleStatusFilter} /> Cancelled
            </label>
            <label>
              <input type="checkbox" value="Live" onChange={handleStatusFilter} /> Live
            </label>
            </div>
            
            <button onClick={() => setIsFilterOpen(false)}>Close</button>
          </div>
      )}

      <div className="container">
        <div className="row">
          {filteredData.map((item: TournamentData) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <TournamentCard
                id={item.id}
                cricketLogo={item.cricketLogo}
                matchStatus={item.matchStatus}
                matchTitle={item.matchTitle}
                calenderIcon={item.calenderIcon}
                matchDate={item.matchDate}
                locationIcon={item.locationIcon}
                matchLocation={item.matchLocation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomesticTournament;
