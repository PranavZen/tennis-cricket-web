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







// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import "../../../components/profilePageSection/profilePage.scss";
// import Header from "../../common/header/Header";

// interface BowlingPerformanceProps {
//   next: () => void;
//   prev: () => void;
//   formData: any;
//   setFormData: (data: any) => void;
// }

// const calculateEconomyRate = (bowl_runs: number, bowl_overs: number) =>
//   bowl_overs > 0 ? (bowl_runs / bowl_overs).toFixed(2) : "0.00";

// const BowlingPerformance: React.FC<BowlingPerformanceProps> = ({
//   next,
//   prev,
//   formData,
//   setFormData,
// }) => {
//   const validationSchema = Yup.object({
//     bowl_overs: Yup.number()
//       .required("Overs bowled is required")
//       .min(0, "Overs cannot be negative"),
//       bowl_wicket: Yup.number()
//       .required("Wickets taken is required")
//       .min(0, "Wickets cannot be negative"),
//       bowl_runs: Yup.number()
//       .required("Runs conceded is required")
//       .min(0, "Runs cannot be negative"),
//       bowl_economy: Yup.string(),
//       bowl_bbf: Yup.string().required("Best bowling figures are required"),
//   });

//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={formData}
//         validationSchema={validationSchema}
//         onSubmit={async (values, { setSubmitting }) => {
//           try {
//             const token =localStorage.getItem('token')
//             // Submit form data to your API
//             const response = await axios.post(
//               "https://my.tc.popopower.com/api/claim-score",
//               values,
//               {
//                 headers: {
//                   "Authorization": `Bearer ${token}`,
//                 },
//               }
//             );
//             console.log("Response:", response.data);

//             // Save form data to state
//             setFormData(values);

//             // Move to the next tab
//             next();
//           } catch (error) {
//             console.error("Error submitting form:", error);
//           } finally {
//             setSubmitting(false);
//           }
//         }}
//       >
//         {({ values, setFieldValue, isSubmitting }) => {
//           const updateEconomyRate = () => {
//             const bowl_economy_rate = calculateEconomyRate(
//               Number(values.bowl_runs),
//               Number(values.bowl_overs)
//             );
//             setFieldValue("bowl_economy_rate", bowl_economy_rate);
//           };

//           return (
//             <Form>
//               <div className="row">
//                 <div className="col-md-6">
//                   <label>Overs Bowled:</label>
//                   <Field
//                     type="number"
//                     name="bowl_overs"
//                     placeholder="Enter overs bowled"
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                       setFieldValue("bowl_overs", e.target.value);
//                       updateEconomyRate();
//                     }}
//                   />
//                   <ErrorMessage
//                     name="bowl_overs"
//                     component="div"
//                     className="error"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label>Wickets Taken:</label>
//                   <Field
//                     type="number"
//                     name="bowl_wicket"
//                     placeholder="Enter wickets taken"
//                   />
//                   <ErrorMessage
//                     name="bowl_wicket"
//                     component="div"
//                     className="error"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label>Runs Conceded:</label>
//                   <Field
//                     type="number"
//                     name="bowl_runs"
//                     placeholder="Enter runs conceded"
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                       setFieldValue("bowl_runs", e.target.value);
//                       updateEconomyRate();
//                     }}
//                   />
//                   <ErrorMessage
//                     name="bowl_runs"
//                     component="div"
//                     className="error"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label>Economy Rate:</label>
//                   <Field type="text" name="bowl_economy_rate" readOnly />
//                 </div>

//                 <div className="col-md-6">
//                   <label>Best Bowling Figures:</label>
//                   <Field
//                     type="text"
//                     name="bowl_bbf"
//                     placeholder="e.g., 3/25"
//                   />
//                   <ErrorMessage
//                     name="bowl_bbf"
//                     component="div"
//                     className="error"
//                   />
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-12 btn-style">
//                   <button type="button" onClick={prev} disabled={isSubmitting}>
//                     Previous
//                   </button>
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

// export default BowlingPerformance;
