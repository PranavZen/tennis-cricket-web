import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../components/profilePageSection/profilePage.scss";

interface BowlingPerformance {
  next: () => void;
  prev: () => void;
  formData: any;
  setFormData: (data: any) => void;
}
const calculateEconomyRate = (runs: number, overs: number) =>
  overs > 0 ? (runs / overs).toFixed(2) : "0.00";

const BowlingPerformance: React.FC<BowlingPerformance> = ({
  next,
  prev,
  formData,
  setFormData,
}) => {
  const validationSchema = Yup.object({
    overs: Yup.number()
      .required("Overs bowled is required")
      .min(0, "Overs cannot be negative"),
    wickets: Yup.number()
      .required("Wickets taken is required")
      .min(0, "Wickets cannot be negative"),
    runsConceded: Yup.number()
      .required("Runs conceded is required")
      .min(0, "Runs cannot be negative"),
    economyRate: Yup.string(),
    bestBowling: Yup.string().required("Best bowling figures are required"),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormData(values);
          next();
        }}
      >
        {({ values, setFieldValue }) => {
          const updateEconomyRate = () => {
            const economyRate = calculateEconomyRate(
              Number(values.runsConceded),
              Number(values.overs)
            );
            setFieldValue("economyRate", economyRate);
          };

          return (
            <Form>
              <div className="row">
                <div className="col-md-6">
                  <label>Overs Bowled:</label>
                  <Field
                    type="number"
                    name="overs"
                    placeholder="Enter overs bowled"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setFieldValue("overs", e.target.value);
                      updateEconomyRate();
                    }}
                  />
                  <ErrorMessage
                    name="overs"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="col-md-6">
                  <label>Wickets Taken:</label>
                  <Field
                    type="number"
                    name="wickets"
                    placeholder="Enter wickets taken"
                  />
                  <ErrorMessage
                    name="wickets"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="col-md-6">
                  <label>Runs Conceded:</label>
                  <Field
                    type="number"
                    name="runsConceded"
                    placeholder="Enter runs conceded"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setFieldValue("runsConceded", e.target.value);
                      updateEconomyRate();
                    }}
                  />
                  <ErrorMessage
                    name="runsConceded"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="col-md-6">
                  <label>Economy Rate:</label>
                  <Field type="text" name="economyRate" readOnly />
                </div>

                <div className="col-md-6">
                  <label>Best Bowling Figures:</label>
                  <Field
                    type="text"
                    name="bestBowling"
                    placeholder="e.g., 3/25"
                  />
                  <ErrorMessage
                    name="bestBowling"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 btn-style">
                  <button type="button" onClick={prev}>
                    Previous
                  </button>
                  <button type="submit">Next</button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BowlingPerformance;
