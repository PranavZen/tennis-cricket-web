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
          <option value="Mumbles">Mumbles</option>
          <option value="Mumbake">Mumbake</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kalyan">Kalyan</option>
          <option value="Ambernath">Ambernath</option>
          <option value="Badlapur">Badlapur</option>
        </select>
      </>
    </div>
  );
};

export default LiveMatchDropdown;