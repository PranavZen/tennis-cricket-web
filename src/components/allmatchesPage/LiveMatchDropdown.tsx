import React from "react";

interface DropdownProps {
  selectedCity: string;
  handleCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LiveMatchDropdown: React.FC<DropdownProps> = ({ selectedCity, handleCityChange }) => {
  return (
    <div className="dropdown">
      <>
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
      </>
    </div>
  );
};

export default LiveMatchDropdown;
