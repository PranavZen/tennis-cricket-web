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
            <label htmlFor="bowl_overs">Overs Bowled:</label>
            <Field
              id="bowl_overs"
              name="bowl_overs"
              type="number"
              placeholder="Enter overs bowled"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateEconomyRate();
              }}
              value={formik.values.bowl_overs}
            />
            <ErrorMessage name="bowl_overs" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_wicket">Wickets Taken:</label>
            <Field
              id="bowl_wicket"
              name="bowl_wicket"
              type="number"
              placeholder="Enter wickets taken"
              value={formik.values.bowl_wicket}
            />
            <ErrorMessage name="bowl_wicket" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bowl_runs">Runs Conceded:</label>
            <Field
              id="bowl_runs"
              name="bowl_runs"
              type="number"
              placeholder="Enter runs conceded"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateEconomyRate();
              }}
              value={formik.values.bowl_runs}
            />
            <ErrorMessage name="bowl_runs" component="div" className="error" />
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
        </div>

        <div className="row">
          <div className="col-12 btn-style">
            <button type="button" onClick={onPrev} disabled={formik.isSubmitting}>
              Previous
            </button>
            <button type="submit" disabled={formik.isSubmitting} onClick={onNext}>
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