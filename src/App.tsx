import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMatches from "./components/allmatchesPage/AllMatches";
import DomesticTournament from "./components/domesticTournamentPage/DomesticTournament";
import Slider from "./components/homepg/Slider/Slider";
import TournamentDashboard from "./components/tournamentDashboardPage/TournamentDashboard";
import HomePage from "./pages/HomePage";
import Footer from "./components/homepg/footerSection/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegistrationForm from "./pages/RegistrationSection/RegistrationForm";
import LoginForm from "./pages/loginFormSection/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Slider />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allMatches" element={<AllMatches />} />
        <Route path="/tournamentDashboard" element={<TournamentDashboard />} />
        <Route path="/domesticTournamnet" element={<DomesticTournament />} />
        <Route path="/registrationPage" element={<RegistrationForm/>}/>
        <Route path="/loginPage" element={<LoginForm/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;

















// import "../RegistrationSection/registration.scss";
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// interface FormValues {
//   firstName: string;
//   middleName: string;
//   surname: string;
//   mobileNumber: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const initialValues: FormValues = {
//   firstName: "",
//   middleName: "",
//   surname: "",
//   mobileNumber: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .required("First name is required")
//     .min(2, "First name should have at least 2 characters")
//     .max(10, "Last name should not be more than 10 characters"),

//   middleName: Yup.string()
//   .required("Middle name is required")
//   .min(2, "Middle name should have at least 2 characters")
// .max(10, "Middle name should not be more than 10 characters"),

//   surname: Yup.string().required("Surname is required")
//   .min(2, "Surname should have at least 2 characters")
// .max(10, "Surname should not be more than 10 characters"),

//   mobileNumber: Yup.string()
//     .required("Mobile number is required")
//     .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),

//   password: Yup.string()
//     .required("Password is required")
//     .min(8, 'Password must be 8 characters long')
//     .matches(/[0-9]/, 'Password requires a number')
//     .matches(/[a-z]/, 'Password requires a lowercase letter')
//     .matches(/[A-Z]/, 'Password requires an uppercase letter')
//     .matches(/[^\w]/, 'Password requires a symbol'),

//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), undefined], "Passwords must match")
//     .required("Confirm password is required"),
// });

// const RegistrationForm: React.FC = () => {
//   const handleSubmit = (values: FormValues) => {
//     console.log("Form values:", values);
//   };

//   return (
//     <section>
//         <div className="Reg-form">
//         <div className="heading">
//             <h6>Registration Form</h6>
//         </div>

//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form>
//           <div className="form-field">
//             <label>First Name :</label>
//             <Field name="firstName" type="text" placeholder="First Name"/>
//             <div style={{ color: "red" }}>
//               <ErrorMessage name="firstName" component="div" />
//             </div>
//           </div>

//           <div className="form-field">
//             <label>Middle Name :</label>
//             <Field name="middleName" type="text" placeholder="Middle Name"/>
//             <div style={{ color: "red" }}>
//               <ErrorMessage name="middleName" component="div" />
//             </div>
//           </div>

//           <div className="form-field">
//             <label>Surname :</label>
//             <Field name="surname" type="text" placeholder="Last Name"/>
//             <div style={{ color: "red" }}>
//               <ErrorMessage name="surname" component="div" />
//             </div>
//           </div>

//           <div className="form-field">
//             <label>Mobile Number :</label>
//             <Field name="mobileNumber" type="text" placeholder="Mobile Number"/>
//             <div style={{ color: "red" }}>
//               <ErrorMessage name="mobileNumber" component="div" />
//             </div>
//           </div>

//           <div className="form-field">
//             <label>Email :</label>
//             <Field name="email" type="email" placeholder="name@example.com"/>
//             <div style={{ color: "red" }}>
//               <ErrorMessage name="email" component="div" />
//             </div>
//           </div>

//           <div className="form-field">
//             <label>Password :</label>
//             <Field name="password" type="password" placeholder="Password"/>
//             <div style={{ color: "red" }}>
//               <ErrorMessage name="password" component="div" />
//             </div>
//           </div>

//           <div className="form-field">
//             <label>Confirm Password :</label>
//             <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
//             <div style={{ color: "red" }}>
//               <ErrorMessage name="confirmPassword" component="div" />
//             </div>
//           </div>

//           <button type="submit">Register</button>
//         </Form>
//       )}
//     </Formik>
//     </div>
//     </section>
//   );
// };

// export default RegistrationForm;