// TournamentTeamSeason.tsx
import React from "react";
import { Field } from "formik";

interface TournamentTeamSeasonProps {
  values: any;
}

const TournamentInput: React.FC<TournamentTeamSeasonProps> = ({ values }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <label>Tournament:</label>
        <Field
          type="text"
          name="tournament"
          placeholder="Enter tournament name"
          className="input-box"
        />
      </div>

      <div className="col-md-6">
        <label>Team Name:</label>
        <Field
          type="text"
          name="teamName"
          placeholder="Enter team name"
          className="input-box"
        />
      </div>

      <div className="col-md-6">
        <label>Season:</label>
        <Field
          as="select"
          name="season"
          className="input-box"
        >
          <option value="">Select a season</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </Field>
      </div>
    </div>
  );
};

export default TournamentInput;
