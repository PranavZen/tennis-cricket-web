import React from "react";
import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import "../../../components/profilePageSection/profilePage.scss";

const BattingPerformance = ({ onNext }: { onNext: () => void }) => {
  const formik = useFormikContext<any>();

  const updateStrikeRate = () => {
    const bat_strike_rate = calculateStrikeRate(
      Number(formik.values.bat_runs),
      Number(formik.values.bat_balls)
    );
    formik.setFieldValue("bat_strike_rate", bat_strike_rate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await formik.submitForm();
    onNext();
  };

  return (
    <div className="form-container">
      {/* <h2>Batting Performance</h2> */}
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="bat_runs">Run Scored:</label>
            <Field
              id="bat_runs"
              name="bat_runs"
              type="number"
              placeholder="Enter run scored"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateStrikeRate();
              }}
              value={formik.values.bat_runs}
            />
            <ErrorMessage name="bat_runs" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bat_balls">Balls Faced:</label>
            <Field
              id="bat_balls"
              name="bat_balls"
              type="number"
              placeholder="Enter balls faced"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                updateStrikeRate();
              }}
              value={formik.values.bat_balls}
            />
            <ErrorMessage name="bat_balls" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bat_fours">Fours:</label>
            <Field
              id="bat_fours"
              name="bat_fours"
              type="number"
              placeholder="Enter fours"
              onChange={formik.handleChange}
              value={formik.values.bat_fours}
            />
            <ErrorMessage name="bat_fours" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bat_sixes">Sixes:</label>
            <Field
              id="bat_sixes"
              name="bat_sixes"
              type="number"
              placeholder="Enter sixes"
              onChange={formik.handleChange}
              value={formik.values.bat_sixes}
            />
            <ErrorMessage name="bat_sixes" component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bat_strike_rate">Strike Rate:</label>
            <Field
              id="bat_strike_rate"
              name="bat_strike_rate"
              type="number"
              placeholder="Enter strike rate"
              readOnly
              value={formik.values.bat_strike_rate}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="bat_dismissal">Dismissal Type:</label>
            <Field
              as="select"
              id="bat_dismissal"
              name="bat_dismissal"
              onChange={formik.handleChange}
              value={formik.values.bat_dismissal}
            >
              <option value="notOut">Not Out</option>
              <option value="bowled">Bowled</option>
              <option value="lbw">LBW</option>
              <option value="caught">Caught</option>
            </Field>
            <ErrorMessage
              name="bat_dismissal"
              component="div"
              className="error"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-end">
            <button type="submit" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

const calculateStrikeRate = (runs: number, balls: number) => {
  return balls > 0 ? ((runs / balls) * 100).toFixed(2) : "0.00";
};

export default BattingPerformance;
