import { useState, useEffect } from "react";
import TournamentCard from "../common/tournamentCard/TournamentCard";
import "./domesticTournament.scss";
import data from "./data";
import Header from "../common/header/Header";
import Spinner from "../common/spinner/Spinner";
import { Modal, Checkbox, Button } from "antd"; 
import { CheckboxChangeEvent } from "antd/es/checkbox";

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
  const [loading, setLoading] = useState(true);
  
  const [tempSelectedStatus, setTempSelectedStatus] = useState<string[]>([]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
    setLoading(true);
  };


  const handleStatusFilter = (e: CheckboxChangeEvent) => {
    const value = e.target.value;
    setTempSelectedStatus((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredCards = data.filter((TournamentData) => {
        return (
          (selectedStatus.length === 0 ||
            selectedStatus.includes(TournamentData.matchStatus)) &&
          (selectedCity === "All" ||
            TournamentData.matchLocation.includes(selectedCity))
        );
      });
      setFilteredData(filteredCards);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedCity, selectedStatus]);

  const filterContent = (
    <div>
      <label>
        <Checkbox value="Ongoing" onChange={handleStatusFilter}> Ongoing </Checkbox>
      </label>
      <label>
        <Checkbox value="Upcoming" onChange={handleStatusFilter}> Upcoming </Checkbox>
      </label>
      <label>
        <Checkbox value="Cancelled" onChange={handleStatusFilter}> Cancelled </Checkbox>
      </label>
      <label>
        <Checkbox value="Live" onChange={handleStatusFilter}> Live </Checkbox>
      </label>
    </div>
  );

  const openFilterModal = () => {
    setIsFilterOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterOpen(false);
  };

  const applyFilters = () => {
    setSelectedStatus(tempSelectedStatus); 
    setIsFilterOpen(false); 
  };

  return (
    <section className="domesticTournamnet">
      <Header
        subtitle="All Domestic Cricket Tournaments"
        className="innerpageHeading"
      />
      <div className="tournament">
        <div className="container">
          <div className="row">
            <div className="header-div">
              <div className="dropdown">
                Choose Location
                <select value={selectedCity} onChange={handleCityChange}>
                  <option value="All">All</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>

              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Tournament"
                  name="search"
                />

                <button
                  onClick={openFilterModal}
                  className="filter-icon"
                >  
                  <img src="images/filterIcon.svg" alt="filter-icon" />
                </button>
              </div>
            </div>

            {/*******************************/}

            {loading ? (
              <div>
                <Spinner />
              </div>
            ) : (
              filteredData.map((item: TournamentData) => (
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
              ))
            )}
          </div>
        </div>
      </div>

      <Modal
        title="Filter Matches"
        visible={isFilterOpen}
        onCancel={closeFilterModal} 
        footer={null} 
      >
        {filterContent}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button type="primary" onClick={applyFilters}>
            OK
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default DomesticTournament;