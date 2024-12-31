import React from "react";

interface DropdownProps {
  selectedCity: string;
  cities: string[];
  onCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TeamNmaeDropdown: React.FC<DropdownProps> = ({
  selectedCity,
  cities,
  onCityChange,
}) => (
  <div className="dropdown-city">
    Choose
    <select value={selectedCity} name="city-names" id="city" onChange={onCityChange}>
      <option value="All">Live</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
    <button>
      <img src="images/filterIcon.svg" alt="filter-icon" />
    </button>
  </div>
);

export default TeamNmaeDropdown;
