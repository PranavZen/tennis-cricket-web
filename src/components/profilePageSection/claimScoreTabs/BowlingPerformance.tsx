import React from "react";
import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import "../../../components/profilePageSection/profilePage.scss";

const BowlingPerformance = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => {
  const formik = useFormikContext<any>();

  const updateEconomyRate = () => {
    const bowl_overs = Number(formik.values.bowl_overs);
    const bowl_runs = Number(formik.values.bowl_runs);
    const bowl_economy_rate = calculateEconomyRate(bowl_runs, bowl_overs);
    formik.setFieldValue("bowl_economy_rate", bowl_economy_rate);
  };

  return (
    <div className="form-container">
      {/* <h2>Bowling Performance</h2> */}
      <Form>
        <div className="row">
        <div className="col-md-6">
            <label htmlFor="bowl_matches">Matches:</label>
            <Field
              id="bowl_matches"
              name="bowl_matches"
              type="number"
              placeholder="Enter matches"
              value={formik.values.bowl_matches}
            />
            <ErrorMessage name="bowl_matches" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_innings">Innings:</label>
            <Field
              id="bowl_innings"
              name="bowl_innings"
              type="number"
              placeholder="Enter innings"
              value={formik.values.bowl_innings}
            />
            <ErrorMessage name="bowl_innings" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_wicket">Wickets Taken:</label>
            <Field
              id="bowl_wickets"
              name="bowl_wickets"
              type="number"
              placeholder="Enter wickets taken"
              value={formik.values.bowl_wickets}
            />
            <ErrorMessage name="bowl_wickets" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_runs">Runs:</label>
            <Field
              id="bowl_runs"
              name="bowl_runs"
              type="number"
              placeholder="Enter runs"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateEconomyRate();
              }}
              value={formik.values.bowl_runs}
            />
            <ErrorMessage name="bowl_runs" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_balls">Ball:</label>
            <Field
              id="bowl_balls"
              name="bowl_balls"
              type="number"
              placeholder="Enter ball"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateEconomyRate();
              }}
              value={formik.values.bowl_balls}
            />
            <ErrorMessage name="bowl_overs" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_economy_rate">Economy Rate:</label>
            <Field
              id="bowl_economy_rate"
              name="bowl_economy_rate"
              type="number"
              placeholder="0.00"
              readOnly
              value={formik.values.bowl_economy_rate}
            />
            <ErrorMessage name="bowl_economy_rate" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_bbf">Best Bowling Figures:</label>
            <Field
              id="bowl_bbf"
              name="bowl_bbf"
              type="text"
              placeholder="e.g., 3/25"
              value={formik.values.bowl_bbf}
            />
            <ErrorMessage name="bowl_bbf" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_maidens">Maidens:</label>
            <Field
              id="bowl_maidens"
              name="bowl_maidens"
              type="number"
              placeholder="Enter maidens"
              value={formik.values.bowl_maidens}
            />
            <ErrorMessage name="bowl_maidens" component="div" className="error" />
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

const calculateEconomyRate = (runs: number, overs: number) => {
  return overs > 0 ? (runs / overs).toFixed(2) : "0.00";
};

export default BowlingPerformance;