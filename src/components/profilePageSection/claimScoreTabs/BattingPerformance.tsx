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
    onNext(); // Trigger the next step in the form wizard
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

// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import "../../../components/profilePageSection/profilePage.scss";
// import { fields } from "../../../mockdata/profilePageMockdata/BattingPerfomTabData";

// interface BattingPerformanceProps {
//   next: () => void;
//   formData: any;
//   setFormData: (data: any) => void;
// }

// // Helper function to calculate strike rate
// const calculateStrikeRate = (bat_runs: number, bat_balls: number) =>
//   bat_balls > 0 ? ((bat_runs / bat_balls) * 100).toFixed(2) : "0.00";

// const BattingPerformance: React.FC<BattingPerformanceProps> = ({
//   next,
//   formData,
//   setFormData,
// }) => {
//   // Validation schema
//   const validationSchema = Yup.object(
//     fields.reduce((schema, field) => {
//       return {
//         ...schema,
//         [field.name]: field.validation,
//       };
//     }, {} as Record<string, Yup.AnySchema>)
//   ).shape({
//     bat_dismissal: Yup.string().required("Dismissal type is required"),
//     bat_runs: Yup.number()
//       .required("The bat runs field is required")
//       .min(0, "Runs must be a positive number"),
//     bat_balls: Yup.number()
//       .required("The bat balls field is required")
//       .min(0, "Balls must be a positive number"),
//   });

//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={{
//           ...formData,
//           bat_runs: formData.bat_runs || "",
//           bat_balls: formData.bat_balls || "",
//           bat_strike_rate: formData.bat_strike_rate || "",
//           bat_dismissal: formData.bat_dismissal || "notOut",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={async (values, { setSubmitting }) => {
//           try {
//             const token = localStorage.getItem("token");
//             const response = await axios.post(
//               "https://my.tc.popopower.com/api/claim-score",
//               values,
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               }
//             );
//             console.log("Response:", response.data);

//             setFormData(values);
//             next();
//           } catch (error) {
//             console.error("Error submitting form:", error);
//           } finally {
//             setSubmitting(false);
//           }
//         }}
//       >
//         {({ values, setFieldValue, isSubmitting }) => {
//           const updateStrikeRate = () => {
//             const bat_strike_rate = calculateStrikeRate(
//               Number(values.bat_runs),
//               Number(values.bat_balls)
//             );
//             setFieldValue("bat_strike_rate", bat_strike_rate);
//           };

//           return (
//             <Form>
//               <div className="row">
//                 {fields.map((field) => (
//                   <div className="col-md-6" key={field.name}>
//                     <label>{field.label}:</label>
//                     <Field
//                       type={field.type}
//                       name={field.name}
//                       placeholder={field.placeholder}
//                       value={values[field.name as keyof typeof values]} // Fixed type issue
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                         setFieldValue(field.name, e.target.value);
//                         if (
//                           field.name === "bat_runs" ||
//                           field.name === "bat_balls" ||
//                           field.name === "bat_fours" ||
//                           field.name === "bat_sixes"
//                         ) {
//                           updateStrikeRate();
//                         }
//                       }}
//                     />
//                     <ErrorMessage
//                       name={field.name}
//                       component="div"
//                       className="error"
//                     />
//                   </div>
//                 ))}

//                 <div className="col-md-6">
//                   <label>Strike Rate:</label>
//                   <Field type="text" name="bat_strike_rate" readOnly />
//                 </div>

//                 <div className="col-md-6">
//                   <label>Dismissal Type:</label>
//                   <Field as="select" name="bat_dismissal">
//                     <option value="notOut">Not Out</option>
//                     <option value="bowled">Bowled</option>
//                     <option value="lbw">LBW</option>
//                     <option value="caught">Caught</option>
//                   </Field>
//                   <ErrorMessage
//                     name="bat_dismissal"
//                     component="div"
//                     className="error"
//                   />
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-12 text-end">
//                   <button type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? "Submitting..." : "Next"}
//                   </button>
//                 </div>
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// };

// export default BattingPerformance;
