import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fields } from "../../mockdata/profilePageMockdata/BattingPerfomTabData";
import "../../components/profilePageSection/profilePage.scss";

interface BattingPerformanceProps {
  next: () => void;
  formData: any;
  setFormData: (data: any) => void;
}
const calculateStrikeRate = (runs: number, balls: number) =>
  balls > 0 ? ((runs / balls) * 100).toFixed(2) : "0.00";

const BattingPerformance: React.FC<BattingPerformanceProps> = ({ 
  next,
  formData,
  setFormData
}) => {
  const validationSchema = Yup.object(
    fields.reduce((schema, field) => {
      return {
        ...schema,
        [field.name]: field.validation,
      };
    }, {} as Record<string, Yup.AnySchema>)
  ).shape({
    dismissalType: Yup.string().required("Dismissal type is required"),
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
          const updateStrikeRate = () => {
            const strikeRate = calculateStrikeRate(
              Number(values.runs),
              Number(values.balls)
            );
            setFieldValue("strikeRate", strikeRate);
          };

          return (
            <Form>
              <div className="row">
                {fields.map((field) => (
                  <div className="col-md-6" key={field.name}>
                    <label>{field.label}:</label>
                    <Field
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue(field.name, e.target.value);
                        if (field.name === "runs" || field.name === "balls") {
                          updateStrikeRate();
                        }
                      }}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="error"
                    />
                  </div>
                ))}

                <div className="col-md-6">
                  <label>Strike Rate:</label>
                  <Field type="text" name="strikeRate" readOnly />
                </div>

                <div className="col-md-6">
                  <label>Dismissal Type:</label>
                  <Field as="select" name="dismissalType">
                    <option value="notOut">Not Out</option>
                    <option value="bowled">Bowled</option>
                    <option value="lbw">LBW</option>
                    <option value="caught">Caught</option>
                  </Field>
                  <ErrorMessage
                    name="dismissalType"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 text-end">
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

export default BattingPerformance;
