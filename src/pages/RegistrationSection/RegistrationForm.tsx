import "../RegistrationSection/registration.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";
import RegButton from "../../components/common/button/RegButton";
import { states, cities, zones } from "./registrationData";
import Header from "../../components/common/header/Header";
import Navigation from "../../components/homepg/Navigation/Navigation";
import { toast, ToastContainer } from "react-toastify";

interface FormValues {
  firstName: string;
  middleName: string;
  surname: string;
  mobileNumber: string;
  alternateNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  bloodGroup: string;
  state: string;
  city: string;
  zone: string;
  aadhaarNumber: string;
  profilePhoto?: File;
  AadharPhoto?: File;
}

const initialValues: FormValues = {
  firstName: "",
  middleName: "",
  surname: "",
  mobileNumber: "",
  alternateNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
  bloodGroup: "",
  state: "",
  city: "",
  zone: "",
  aadhaarNumber: "",
  //   profilePhoto: null,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name should have at least 2 characters")
    .max(10, "First name should not be more than 10 characters"),

  middleName: Yup.string()
    .required("Middle name is required")
    .min(2, "Middle name should have at least 2 characters")
    .max(10, "Middle name should not be more than 10 characters"),

  surname: Yup.string()
    .required("Surname is required")
    .min(2, "Surname should have at least 2 characters")
    .max(10, "Surname should not be more than 10 characters"),

  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

  alternateNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email structure"
    )
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),

  bloodGroup: Yup.string().required("Blood group is required"),

  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  zone: Yup.string().required("Zone is required"),

  aadhaarNumber: Yup.string()
    .required("Aadhar number is required")
    .matches(/^\d{12}$/, "Aadhaar number must be 12 digits long"),

  profilePhoto: Yup.mixed().nullable()
    .required("Profile photo is required"),
    // .test(
    //   "fileSize",
    //   "File too large",
    //   (value) => value && (value as File).size <= 1024 * 1024
    // ) // 1MB size limit
    // .test(
    //   "fileType",
    //   "Unsupported file type",
    //   (value) =>
    //     value && ["image/jpeg", "image/png"].includes((value as File).type)
    // ),

  AadharPhoto: Yup.mixed().nullable()
    .required("Profile photo is required"),
    // .test(
    //   "fileSize",
    //   "File too large",
    //   (value) => value && (value as File).size <= 1024 * 1024
    // ) // 1MB size limit
    // .test(
    //   "fileType",
    //   "Unsupported file type",
    //   (value) =>
    //     value && ["image/jpeg", "image/png"].includes((value as File).type)
    // ),
});

const RegistrationForm: React.FC = () => {
  const [filteredCities, setFilteredCities] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [filteredZones, setFilteredZones] = useState<
    Array<{ id: string; name: string }>
  >([]);

  const handleStateChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: FormikProps<FormValues>["setFieldValue"]
  ) => {
    const state = event.target.value;
    setFieldValue("state", state);
    setFieldValue("city", ""); // Reset city selection
    setFieldValue("zone", ""); // Reset zone selection
    setFieldValue("bloodGroup", "");
    setFilteredCities(cities[state as keyof typeof cities] || []);
    setFilteredZones([]); // Clear zones
  };

  const handleCityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: FormikProps<FormValues>["setFieldValue"]
  ) => {
    const city = event.target.value;
    setFieldValue("city", city);
    setFieldValue("zone", ""); // Reset zone selection
    setFilteredZones(zones[city as keyof typeof zones] || []);
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Form values:", values);
    toast.success('Registered successfully!');
  };

  return (
    <section>
      <Navigation />
      <div className="Reg-form">
        <div className="heading mb-4">
          <h6>Registration Form</h6>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className="form-fields">
              <div className="container">
                <div className="row">
                  {/* First Column */}
                  <div className="mb-3 col-md-6">
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingFirstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="firstName" component="div" />
                    </div>
                  </div>

                  <div className="mb-3 col-md-6">
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingMiddleName"
                      name="middleName"
                      placeholder="Middle Name"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="middleName" component="div" />
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="mb-3 col-md-6">
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingSurname"
                      name="surname"
                      placeholder="Surname"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="surname" component="div" />
                    </div>
                  </div>

                  <div className="mb-3 col-md-6">
                    <Field
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </div>

                  {/* Third Column */}    
                  <div className="mb-3 col-md-6">
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingMobileNumber"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="mobileNumber" component="div" />
                    </div>
                  </div>

                  <div className="mb-3 col-md-6">
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingAlternateNumber"
                      name="alternateNumber"
                      placeholder="Alternate Mobile Number"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="alternateNumber" component="div" />
                    </div>
                  </div>
                  

                  {/* Fourth Column */}
                  <div className="mb-3 col-md-6">
                    <Field
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      name="password"
                      placeholder="Password"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="password" component="div" />
                    </div>
                  </div>

                  <div className="mb-3 col-md-6">
                    <Field
                      type="password"
                      className="form-control"
                      id="floatingConfirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="confirmPassword" component="div" />
                    </div>
                  </div>

                  {/* Select Inputs */}
                  <div className="mb-3 col-md-6">
  <Field
    as="select"
    className="form-select"
    name="bloodGroup"
    value={values.bloodGroup} // Bind value to Formik's state
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setFieldValue('bloodGroup', e.target.value)
      }
  >
    <option value="">Select Blood Group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </Field>
  <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
    <ErrorMessage name="bloodGroup" component="div" />
  </div>
</div>


                  <div className="mb-3 col-md-6">
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingAadhaarNumber"
                      name="aadhaarNumber"
                      placeholder="Aadhaar Number"
                    />
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="aadhaarNumber" component="div" />
                    </div>
                  </div>

                  {/* State Dropdown */}
                  <div className="mb-3 col-md-6">
                    <Field
                      as="select"
                      className="form-select"
                      name="state"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleStateChange(e, setFieldValue)
                      }
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </Field>
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="state" component="div" />
                    </div>
                  </div>

                  {/* City Dropdown */}
                  <div className="mb-3 col-md-3">
                    <Field
                      as="select"
                      className="form-select"
                      name="city"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleCityChange(e, setFieldValue)
                      }
                      disabled={!filteredCities.length}
                    >
                      <option value="">Select City</option>
                      {filteredCities.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </Field>
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="city" component="div" />
                    </div>
                  </div>

                  {/* Zone Dropdown */}
                  <div className="mb-3 col-md-2">
                    <Field
                      as="select"
                      className="form-select"
                      name="zone"
                      disabled={!filteredZones.length}
                    >
                      <option value="">Select Zone</option>
                      {filteredZones.map((zone) => (
                        <option key={zone.id} value={zone.name}>
                          {zone.name}
                        </option>
                      ))}
                    </Field>
                    <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                      <ErrorMessage name="zone" component="div" />
                    </div>
                  </div>

                  {/* Profile and Aadhar Photo */}
                  <div className="user-profilePhoto mb-3 col-md-6">
                    <label>Profile Photo</label>
                    <div className="mb-3">
                      <Field
                        type="file"
                        className="form-control"
                        aria-label="file example"
                        id="profilePhoto"
                        name="profilePhoto"
                        // style={{ width: "50%" }}
                      />
                      <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                        <ErrorMessage name="profilePhoto" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="user-aadharPhoto mb-3 col-md-6">
                    <label>Aadhar Photo</label>
                    <div className="form-floating mb-3">
                      <Field
                        type="file"
                        className="form-control"
                        aria-label="file example"
                        id="AadharPhoto"
                        name="AadharPhoto"
                        // style={{ width: "50%" }}
                      />
                      <div style={{ color: '#ccc', fontSize: '1.5rem', fontWeight: '500' }}>
                        <ErrorMessage name="AadharPhoto" component="div" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <RegButton text={"Register"} style={{ margin: "auto" }} /> */}
              <div className="reg-btn">
                <button
                  className="registration-button"
                //   disabled={!(isValid && dirty)}
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <ToastContainer position="top-right" autoClose={5000}
        // position="top-right" // Toast position
        // autoClose={5000}      // Toast duration before auto-closing (in ms)
        // hideProgressBar={false} // Show progress bar
        // newestOnTop={true}    // New toasts appear at the top
        // closeOnClick={true}   // Toast closes when clicked
        // pauseOnHover={true}   // Pause when hover over the toast
        // draggable={true}      // Allow dragging
        // pauseOnFocusLoss={false} // Toast doesn't pause if focus is lost
      />
      </div>
    </section>
  );
};

export default RegistrationForm;
