import React from "react";

interface DropdownProps {
selectType: string;
handelTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
selectStyle: string;
handleStyleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ selectType, selectStyle, handelTypeChange, handleStyleChange }) => {

  return (
    <div className="leaderboard-dropdown">
    <div className="dropdown">
      {/* <label htmlFor="city-dropdown">Choose Location</label> */}
      <select
        id="type-dropdown"
        value={selectType}
        onChange={handelTypeChange}
      >
        <option value="Bat">Bat</option>
        <option value="Bowl">Bowl</option>
        <option value="Field">Field</option>
      </select>
    </div>

    <div className="dropdown">
      {/* <label htmlFor="city-dropdown">Choose Location</label> */}
      <select
        id="styles-dropdown"
        value={selectStyle}
        onChange={handleStyleChange}
      >
        <option value="Select">All Style</option>
        <option value="Bat">Most Wickets</option>
        <option value="Bowl">Best Averages</option>
        <option value="Field">Best Economy</option>
        <option value="Field">Best Strike Rates</option>
        <option value="Field">Highest Wickets (in an innings)</option>
        <option value="Field">Most Maiden Overs Bowled</option>
      </select>
    </div>
    </div>
  );
};

export default Dropdown;
