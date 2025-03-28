import React from "react";
import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import "../../../components/profilePageSection/profilePage.scss";

const BowlingPerformance = ({ matchIndex, onPrev, onNext }: { matchIndex: number; onPrev: () => void; onNext: () => void }) => {
  const formik = useFormikContext<any>();

  // const updateEconomyRate = () => {
  //   const bowl_overs = Number(formik.values.matches[matchIndex].bowl_overs);
  //   const bowl_runs = Number(formik.values.matches[matchIndex].bowl_runs);
  //   const bowl_economy_rate = calculateEconomyRate(bowl_runs, bowl_overs);
  //   formik.setFieldValue(`matches[${matchIndex}].bowling.bowl_economy_rate`, bowl_economy_rate);
  // };

  const updateEconomyRate = () => {
    const balls = Number(formik.values.matches[matchIndex].bowling.bowl_balls);
    const overs = balls / 6;
    const runs = Number(formik.values.matches[matchIndex].bowling.bowl_runs);
    const economy = calculateEconomyRate(runs, overs);
    formik.setFieldValue(`matches[${matchIndex}].bowling.bowl_economy_rate`, economy);
  };
  
  const calculateEconomyRate = (runs: number, overs: number) => {
    return overs > 0 ? (runs / overs).toFixed(2) : "0.00";
  };

  return (
    <div className="form-container">
      {/* <h2>Bowling Performance</h2> */}
      <Form>
        <div className="row">
        <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_matches`}>Matches:</label>
            <Field
              id={`matches[${matchIndex}].bowling.bowl_matches`}
              name={`matches[${matchIndex}].bowling.bowl_matches`}
              type="number"
              placeholder="Enter matches"
              value={formik.values.matches[matchIndex].bowling.bowl_matches}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_matches`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_innings`}>Innings:</label>
            <Field
              id={`matches[${matchIndex}].bowling.bowl_innings`}
              name={`matches[${matchIndex}].bowling.bowl_innings`}
              type="number"
              placeholder="Enter innings"
              value={formik.values.matches[matchIndex].bowling.bowl_innings}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_innings`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_wicket`}>Wickets Taken:</label>
            <Field
              id={`matches[${matchIndex}].bowling.bowl_wickets`}
              name={`matches[${matchIndex}].bowling.bowl_wickets`}
              type="number"
              placeholder="Enter wickets taken"
              value={formik.values.matches[matchIndex].bowling.bowl_wickets}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_wickets`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_runs`}>Runs:</label>
            <Field
              id={`matches[${matchIndex}].bowling.bowl_runs`}
              name={`matches[${matchIndex}].bowling.bowl_runs`}
              type="number"
              placeholder="Enter runs"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateEconomyRate();
              }}
              value={formik.values.matches[matchIndex].bowling.bowl_runs}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_runs`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_balls`}>Ball:</label>
            <Field
              id={`matches[${matchIndex}].bowling.bowl_balls`}
              name={`matches[${matchIndex}].bowling.bowl_balls`}
              type="number"
              placeholder="Enter ball"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateEconomyRate();
              }}
              value={formik.values.matches[matchIndex].bowling.bowl_balls}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_balls`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_economy_rate`}>Economy Rate:</label>
            <Field
              id={`matches[${matchIndex}]bowling.bowl_economy_rate`}
              name={`matches[${matchIndex}].bowling.bowl_economy_rate`}
              type="number"
              placeholder="0.00"
              readOnly
              value={formik.values.matches[matchIndex].bowling.bowl_economy_rate}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_economy_rate`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_bbf`}>Best Bowling Figures:</label>
            <Field
              id={`matches[${matchIndex}].bowling.bowl_bbf`}
              name={`matches[${matchIndex}].bowling.bowl_bbf`}
              type="text"
              placeholder="e.g., 3/25"
              value={formik.values.matches[matchIndex].bowling.bowl_bbf}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_bbf`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].bowling.bowl_maidens`}>Maidens:</label>
            <Field
              id={`matches[${matchIndex}].bowling.bowl_maidens`}
              name={`matches[${matchIndex}].bowling.bowl_maidens`}
              type="number"
              placeholder="Enter maidens"
              value={formik.values.matches[matchIndex].bowling.bowl_maidens}
            />
            <ErrorMessage name={`matches[${matchIndex}].bowling.bowl_maidens`} component="div" className="error" />
          </div>
        </div>

        <div className="row">
          <div className="btn-style">
            <button className="claim-button" type="button" onClick={onPrev} disabled={formik.isSubmitting}>
              Previous
            </button>
            <button className="claim-button" type="submit" disabled={formik.isSubmitting} onClick={onNext}>
              {formik.isSubmitting ? "Submitting..." : "Next"}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BowlingPerformance;