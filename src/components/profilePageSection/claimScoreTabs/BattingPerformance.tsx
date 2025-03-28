import React from "react";
import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import "../../../components/profilePageSection/profilePage.scss";

const BattingPerformance = ({ matchIndex, onNext }: { matchIndex: number, onNext: () => void }) => {
  const formik = useFormikContext<any>();

  // const updateStrikeRate = () => {
  //   const bat_strike_rate = calculateStrikeRate(
  //     Number(formik.values.matches[matchIndex].batting.bat_runs),
  //     Number(formik.values.matches[matchIndex].batting.bat_balls)
  //   );
  //   formik.setFieldValue(`matches[${matchIndex}].batting.bat_strike_rate`, bat_strike_rate);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await formik.submitForm();
    onNext();
  };

  const calculateStrikeRate = (runs: number, balls: number) => {
    return balls > 0 ? ((runs / balls) * 100).toFixed(2) : "0.00";
  };

  const calculateAverage = (runs: number, innings: number, notOut: number) => {
    const dismissals = innings - notOut;
    return dismissals > 0 ? (runs / dismissals).toFixed(2) : "0.00";
  };

  return (
    <div className="form-container">
      {/* <h2>Batting Performance</h2> */}
      <Form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-md-6">
            <label htmlFor={'matches[${matchIndex}].batting.bat_matches'}>Matches:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_matches`}
              name={`matches[${matchIndex}].batting.bat_matches`}
              type="number"
              placeholder="Enter matches"
              onChange={formik.handleChange}
              value={formik.values.matches[matchIndex].batting.bat_matches}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_matches`} component="div" className="error" />
          </div>
          
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_innings`}>Innings:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_innings`}
              name={`matches[${matchIndex}].batting.bat_innings`}
              type="number"
              placeholder="Enter innings"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
            
                const bat_innings = Number(e.target.value);
                const { bat_runs, bat_not_out, bat_balls } = formik.values.matches[matchIndex].batting;
            
                const average = calculateAverage(Number(bat_runs), bat_innings, Number(bat_not_out));
                const strikeRate = calculateStrikeRate(Number(bat_runs), Number(bat_balls));
            
                formik.setFieldValue(`matches[${matchIndex}].batting.bat_average`, average);
                formik.setFieldValue(`matches[${matchIndex}].batting.bat_strike_rate`, strikeRate);
              }}
              value={formik.values.matches[matchIndex].batting.bat_innings}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_innings`} component="div" className="error" />
          </div>


          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_runs`}>Run Scored:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_runs`}
              name={`matches[${matchIndex}].batting.bat_runs`}
              type="number"
              placeholder="Enter run scored"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);

                const bat_runs = Number(e.target.value);
                const { bat_innings, bat_not_out, bat_balls } = formik.values.matches[matchIndex].batting;

                const average = calculateAverage(bat_runs, Number(bat_innings), Number(bat_not_out));
                const strikeRate = calculateStrikeRate(bat_runs, Number(bat_balls));

                formik.setFieldValue(`matches[${matchIndex}].batting.bat_average`, average);
                formik.setFieldValue(`matches[${matchIndex}].batting.bat_strike_rate`, strikeRate);
                // updateStrikeRate();
              }}
              value={formik.values.matches[matchIndex].batting.bat_runs}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_runs`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_balls`}>Balls Faced:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_balls`}
              name={`matches[${matchIndex}].batting.bat_balls`}
              type="number"
              placeholder="Enter balls faced"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);

                const bat_balls = Number(e.target.value);
                const bat_runs = Number(formik.values.matches[matchIndex].batting.bat_runs);

                const strikeRate = calculateStrikeRate(bat_runs, bat_balls);
                formik.setFieldValue(`matches[${matchIndex}].batting.bat_strike_rate`, strikeRate);
                // updateStrikeRate();
              }}
              value={formik.values.matches[matchIndex].batting.bat_balls}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_balls`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_fours`}>Fours:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_fours`}
              name={`matches[${matchIndex}].batting.bat_fours`}
              type="number"
              placeholder="Enter fours"
              onChange={formik.handleChange}
              value={formik.values.matches[matchIndex].batting.bat_fours}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_fours`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_sixes`}>Sixes:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_sixes`}
              name={`matches[${matchIndex}].batting.bat_sixes`}
              type="number"
              placeholder="Enter sixes"
              onChange={formik.handleChange}
              value={formik.values.matches[matchIndex].batting.bat_sixes}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_sixes`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_fifty`}>Bat Fifty:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_fifty`}
              name={`matches[${matchIndex}].batting.bat_fifty`}
              type="number"
              placeholder="Enter fifty"
              onChange={formik.handleChange}
              value={formik.values.matches[matchIndex].batting.bat_fifty}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_fifty`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_hundred`}>Hundred:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_hundred`}
              name={`matches[${matchIndex}].batting.bat_hundred`}
              type="number"
              placeholder="Enter hundred"
              onChange={formik.handleChange}
              value={formik.values.matches[matchIndex].batting.bat_hundred}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_hundred`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bat_highest">Highest:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_highest`}
              name={`matches[${matchIndex}].batting.bat_highest`}
              type="number"
              placeholder="Enter highest"
              onChange={formik.handleChange}
              value={formik.values.matches[matchIndex].batting.bat_highest}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_highest`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_strike_rate`}>Strike Rate:</label>
            <Field
              id={`matches[${matchIndex}].batting.bat_strike_rate`}
              name={`matches[${matchIndex}].batting.bat_strike_rate`}
              type="number"
              placeholder="0.00"
              readOnly
              value={formik.values.matches[matchIndex].batting.bat_strike_rate}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_average`}>Average:</label>
            <Field 
              id={`matches[${matchIndex}].batting.bat_average`}
              name={`matches[${matchIndex}].batting.bat_average`}
              type="number"
              placeholder="Enter average"
              onChange={formik.handleChange}
              value={formik.values.matches[matchIndex].batting.bat_average}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_average`} component="div" className="error" />
          </div>
          <div className="col-md-6">
            <label htmlFor={`matches[${matchIndex}].batting.bat_not_out`}>Not Out:</label>
            <Field 
              id={`matches[${matchIndex}].batting.bat_not_out`}
              name={`matches[${matchIndex}].batting.bat_not_out`}
              type="string"
              placeholder="Enter not out"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
            
                const bat_not_out = Number(e.target.value);
                const { bat_runs, bat_innings, bat_balls } = formik.values.matches[matchIndex].batting;
            
                const average = calculateAverage(Number(bat_runs), Number(bat_innings), bat_not_out);
                const strikeRate = calculateStrikeRate(Number(bat_runs), Number(bat_balls));
            
                formik.setFieldValue(`matches[${matchIndex}].batting.bat_average`, average);
                formik.setFieldValue(`matches[${matchIndex}].batting.bat_strike_rate`, strikeRate);
              }}
              value={formik.values.matches[matchIndex].batting.bat_not_out}
            />
            <ErrorMessage name={`matches[${matchIndex}].batting.bat_not_out`} component="div" className="error" />
          </div>
          {/* <div className="col-md-6">
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
        </div> */}

        <div className="row">
          <div className="text-end">
            <button className="claim-button" type="submit" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
        </div>
      </Form>
    </div>
  );
};

export default BattingPerformance;
