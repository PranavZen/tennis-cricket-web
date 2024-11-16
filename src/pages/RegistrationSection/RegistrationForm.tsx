import "../RegistrationSection/registration.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";
import RegButton from "../../components/common/button/RegButton";
import { states, cities, zones } from "./registrationData";
import Header from "../../components/common/header/Header";
import Navigation from "../../components/homepg/Navigation/Navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registrationValidationSchema } from "../../components/common/validation/Validation";

interface FormValues {
  firstName: string;
  lastName: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
  teamName: string;
  playingRole: string;
  battingStyle: string;
  bowlingStyle: string;
  wicketKeeping: string;
  password: string;
  confirmPassword: string;
  bloodGroup: string;
  state: string;
  city: string;
  zone: string;
  profilePhoto?: File;
  idCard?: File;
  socialLinks: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  dob: "",
  phone: "",
  email: "",
  address: "",
  teamName: "",
  playingRole: "",
  battingStyle: "",
  bowlingStyle: "",
  wicketKeeping: "",
  password: "",
  confirmPassword: "",
  bloodGroup: "",
  state: "",
  city: "",
  zone: "",
  socialLinks: "",
};

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
    setFieldValue("bloodGroup", state);
    setFieldValue("playingRole", state);
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

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form values:", values);
    toast.success("Registered successfully!");
    resetForm();
  };

  return (
    <section>
      <ToastContainer position="bottom-right" closeOnClick={true} />
      <Navigation />
      <div className="Reg-form">
        <div className="heading mb-4">
          <h6>Registration Form</h6>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={registrationValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className="form-fields">
              <div className="container">
                <div className="row">
                  {/* First Column */}
                  <div className="mb-5 col-md-6">
                  <label>First Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingFirstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="firstName" component="div" />
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="mb-5 col-md-6">
                  <label>Last Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingLastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="lastName" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-6">
                  <label>Email</label>
                    <Field
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-4">
                  <label>Mobile Number</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingphone"
                      name="phone"
                      placeholder="Mobile Number"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="phone" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-2">
                  <label>DOB</label>
                    <Field
                      className="form-control"
                      type="date"
                      id="floatingDob"
                      name="dob"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="dob" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-12">
                  <label>Address</label>
                    <Field
                      as="textarea"
                      className="form-control"
                      id="floatingaddress"
                      name="address"
                      placeholder="Address"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="address" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-6">
                  <label>Team Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="floatingTeamName"
                      name="teamName"
                      placeholder="Team Name"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="teamName" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-6">
                  <label>Playing Role</label>
                    <Field
                      as="select"
                      className="form-select"
                      name="playingRole"
                      value={values.playingRole} // Bind value to Formik's state
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setFieldValue("playingRole", e.target.value)
                      }
                    >
                      <option value="">Select Playing Role</option>
                      <option value="Batsman">Batsman</option>
                      <option value="Bowler">Bowler</option>
                      <option value="All-rounder">All-rounder</option>
                      <option value="Wicket-keeper">Wicket-keeper</option>
                    </Field>
                    <div className="error-msg">
                      <ErrorMessage name="playingRole" component="div" />
                    </div>
                  </div>

                {values.playingRole === 'Batsman' || values.playingRole === 'All-rounder'
                // || values.playingRole === 'Bowler'
                ? (
                  <div className="mb-5 col-md-6">
                  <label>Batting Style</label>
                    <Field
                      as="select"
                      className="form-select"
                      name="battingStyle"
                      value={values.battingStyle} // Bind value to Formik's state
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setFieldValue("battingStyle", e.target.value)
                      }
                    >
                      <option value="">Select Batting Style</option>
                      <option value="Right-hand">Right-hand</option>
                      <option value="Left-hand">Left-hand</option>
                    </Field>
                    <div className="error-msg">
                      <ErrorMessage name="battingStyle" component="div" />
                    </div>
                  </div>
                  ):null}

                {values.playingRole === 'Bowler' || values.playingRole === 'All-rounder' ? (
                  <div className="mb-5 col-md-6">
                  <label>Bowling Style</label>
                    <Field
                      as="select"
                      className="form-select"
                      name="bowlingStyle"
                      value={values.bowlingStyle} // Bind value to Formik's state
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setFieldValue("bowlingStyle", e.target.value)
                      }
                    >
                      <option value="">Select Bowling Style</option>
                      <option value="Right-arm Fast">Right-arm Fast</option>
                      <option value="Right-arm Medium">Right-arm Medium</option>
                      <option value="Left-arm Fast">Left-arm Fast</option>
                      <option value="Left-arm Medium">Left-arm Medium</option>
                      <option value="Right-arm Spin">Right-arm Spin</option>
                      <option value="Left-arm Spin">Left-arm Spin</option>
                    </Field>
                    <div className="error-msg">
                      <ErrorMessage name="bowlingStyle" component="div" />
                    </div>
                  </div>
                ):null}

                {values.playingRole === 'Wicket-keeper' || values.playingRole === 'All-rounder' ? (
                  <div className="mb-5 col-md-6">
                  <label>Wicketkeeping</label>
                  <div>
                    <Field
                      type="radio"
                      //   className="form-control"
                      id="yes"
                      value="yes"
                      name="wicketKeeping"
                    />
                    <label htmlFor="yes" className="form-check-label">Yes</label>
                    <Field
                      type="radio"
                      //   className="form-control"
                      id="no"
                      value="no"
                      name="wicketKeeping"
                    />
                    <label htmlFor="no" className="form-check-label">No</label>
                    </div>
                    <div className="error-msg">
                      <ErrorMessage name="wicketKeeping" component="div" />
                    </div>
                  </div>
                ):null}          

                  {/* Fourth Column */}
                  <div className="mb-5 col-md-6">
                  <label>Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="password" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-6">
                  <label>Confirm Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      id="floatingConfirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="confirmPassword" component="div" />
                    </div>
                  </div>

                  {/* Select Inputs */}
                  <div className="mb-5 col-md-6">
                  <label>Blood Group</label>
                    <Field
                      as="select"
                      className="form-select"
                      name="bloodGroup"
                      value={values.bloodGroup} // Bind value to Formik's state
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setFieldValue("bloodGroup", e.target.value)
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
                    <div className="error-msg">
                      <ErrorMessage name="bloodGroup" component="div" />
                    </div>
                  </div>

                  <div className="mb-5 col-md-6">
                  <label>Social Links</label>
                    <Field
                      type="url"
                      className="form-control"
                      //   id="floatingTeamName"
                      name="socialLinks"
                      placeholder="Enter URL"
                    />
                    <div className="error-msg">
                      <ErrorMessage name="socialLinks" component="div" />
                    </div>
                  </div>

                  {/* State Dropdown */}
                  <div className="mb-5 col-md-6">
                  <label>State</label>
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
                    <div className="error-msg">
                      <ErrorMessage name="state" component="div" />
                    </div>
                  </div>

                  {/* City Dropdown */}
                  <div className="mb-5 col-md-4">
                  <label>City</label>
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
                    <div className="error-msg">
                      <ErrorMessage name="city" component="div" />
                    </div>
                  </div>

                  {/* Zone Dropdown */}
                  <div className="mb-5 col-md-2">
                  {/* d-flex justify-content-center align-items-center flex-column */}
                  <label>Zone</label>
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
                    <div className="error-msg">
                      <ErrorMessage name="zone" component="div" />
                    </div>
                  </div>

                  {/* Profile and Aadhar Photo */}
                  <div className="user-profilePhoto mb-4 col-md-6">
                    <label>Profile Photo</label>
                    <div className="mb-4">
                      <Field
                        type="file"
                        className="form-control"
                        aria-label="file example"
                        id="profilePhoto"
                        name="profilePhoto"
                        // style={{ width: "50%" }}
                      />
                      <div className="error-msg">
                        <ErrorMessage name="profilePhoto" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="user-aadharPhoto mb-4 col-md-6">
                    <label>ID Card</label>
                    <div className="form-floating mb-4">
                      <Field
                        type="file"
                        className="form-control"
                        aria-label="file example"
                        id="idCard"
                        name="idCard"
                        // style={{ width: "50%" }}
                      />
                      <div className="error-msg">
                        <ErrorMessage name="idCard" component="div" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <RegButton text={"Register"} style={{ margin: "auto" }} /> */}
              <div className="col-md-12 text-center reg-btn">
                <button type="submit">
                  {/* <img src="images\profile-icon.svg" alt="Apple Store" /> */}
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default RegistrationForm;
