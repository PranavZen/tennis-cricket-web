import "./registration.scss";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import RegButton from "../common/button/RegButton";
import { states, cities } from "./registrationData";
import Navigation from "../homepg/Navigation/Navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registrationValidationSchema } from "../common/validation/Validation";
import "boxicons/css/boxicons.min.css";
import UploadFile from "./UploadFile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";

interface FormValues {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  mobile_number: string;
  email: string;
  address: string;
  password: string;
  state_name: string;
  city_name: string;
  // zone_name: string;
  // team_name: string;
  blood_group: string;
  social_link: string;
  playing_role: string;
  batting_style: string;
  bowling_style: string;
  wicket_keeping: string;
  password_confirmation: string;
  doc_id_card: File | null;
  doc_profile_photo: File | null;
}

const initialValues: FormValues = {
  first_name: "",
  last_name: "",
  date_of_birth: "",
  mobile_number: "",
  email: "",
  address: "",
  password: "",
  state_name: "",
  city_name: "",
  // zone_name: "",
  // team_name: "",
  blood_group: "",
  social_link: "",
  playing_role: "",
  batting_style: "",
  bowling_style: "",
  wicket_keeping: "",
  password_confirmation: "",
  doc_id_card: null,
  doc_profile_photo: null,
};

const RegistrationForm: React.FC = () => {
  const [state, setState] = useState<any[]>([]); // State list
  const [city, setCity] = useState<any[]>([]); // City list
  const [selectedState, setSelectedState] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [filteredCities, setFilteredCities] = useState<
  //   Array<{ id: string; name: string }>
  // >([]);
  // const [filteredZones, setFilteredZones] = useState<
  //   Array<{ id: string; name: string }>
  // >([]);
  const navigate = useNavigate();

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://my.tc.popopower.com/api/get-states/101"
        );
        setState(response.data);
        // console.log("States Data:", response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when selected state changes
  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
            `https://my.tc.popopower.com/api/get-cities/${selectedState}`
          );
          setCity(response.data);
          // console.log("Cities Data:", response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    }
  }, [selectedState]); // Depend on selectedState

  // const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>, setFieldValue: any) => {
  //   const { value } = e.target;
  //   setFieldValue("state_name", value);
  // };

  // const handleStateChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>,
  //   setFieldValue: FormikProps<FormValues>["setFieldValue"]
  // ) => {
  //   const state = event.target.value;

  //   setFieldValue("state_name", state);
  //   setFieldValue("city_name", "");
  //   // setFieldValue("zone_name", "");
  //   setFieldValue("blood_group", state);
  //   setFieldValue("playing_role", state);
  //   // setFilteredCities(cities[state as keyof typeof cities] || []);
  //   // setFilteredZones([]);
  // };

  // const handleCityChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>,
  //   setFieldValue: FormikProps<FormValues>["setFieldValue"]
  // ) => {
  //   const city_name = event.target.value;

  //   setFieldValue("city_name", city_name);
  //   setFieldValue("zone_name", "");
  //   // setFilteredZones(zones[city_name as keyof typeof zones] || []);
  // };

  // Handle state change
  const handleStateChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: Function
  ) => {
    setSelectedState(e.target.value); // Update selected state
    setFieldValue("state_name", e.target.value); // Update Formik field value
    setCity([]); // Clear cities on state change
  };

  // Handle city change
  const handleCityChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: Function
  ) => {
    setFieldValue("city_name", e.target.value);
  };

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    // console.log("Form submitted with values:", values);
    const formData = new FormData();

    // Add the form fields to the FormData, excluding certain fields
    for (const key in values) {
      if (key !== "doc_id_card" && key !== "doc_profile_photo") {
        formData.append(key, values[key as keyof FormValues] as string);
      }
    }

    // Append the profile photo and ID card if they exist
    if (values.doc_profile_photo) {
      formData.append("doc_profile_photo", values.doc_profile_photo);
    }
    if (values.doc_id_card) {
      formData.append("doc_id_card", values.doc_id_card);
    }

    try {
      const response = await axios.post(
        "https://my.tc.popopower.com/api/register",
        formData
      );

      if (response.data.status === "success") {
        resetForm();
        setTimeout(() => {
          navigate("/loginPage");
          notification.success({ message: "Registered successfully!" });
        }, 1000);
      } else {
        const errorMessages = response.data.message.error;

        if (errorMessages && errorMessages.length > 0) {
          const errorMessage = errorMessages[0];

          if (errorMessage.includes("email id already exists")) {
            notification.error({
              message: "Email ID already exists. Please use a different email.",
            });
          } else if (errorMessage.includes("mobile number already exists")) {
            notification.error({
              message:
                "Mobile number already exists. Please use a different number.",
            });
          } else {
            notification.error({
              message: "Registration failed. Please try again.",
            });
          }
        } else {
          notification.error({
            message: "Registration failed. Please try again.",
          });
        }
      }
    } catch (error: any) {
      console.error("API Error:", error);

      if (error.response && error.response.data) {
        const errorMessages = error.response.data.message.error;

        if (errorMessages && errorMessages.length > 0) {
          const errorMessage = errorMessages[0];

          if (errorMessage.includes("email id already exists")) {
            notification.error({
              message: "Email ID already exists. Please use a different email.",
            });
          } else if (errorMessage.includes("mobile number already exists")) {
            notification.error({
              message:
                "Mobile number already exists. Please use a different number.",
            });
          } else {
            notification.error({ message: "Registration failed!" });
          }
        } else {
          notification.error({ message: "Registration failed!" });
        }
      } else {
        notification.error({ message: "Registration failed!" });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section>
      {/* <ToastContainer
        position="top-right"
        closeOnClick={true}
        className="toast-container"
      /> */}
      <Navigation />
      <div className="Reg-form">
        <div className="heading">
          <h6>Registration</h6>
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
                  <div className="col-lg-8 mx-auto">
                    <div className="row">
                      {/* First Column */}
                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingFirstName">First Name*</label>
                        <Field
                          type="text"
                          className="form-control"
                          id="floatingFirstName"
                          name="first_name"
                          placeholder="First Name"
                          value={values.first_name}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setFieldValue("first_name", event.target.value)}
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="first_name"
                          component="div"
                        />
                      </div>

                      {/* Second Column */}
                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingLastName">Last Name*</label>
                        <Field
                          type="text"
                          className="form-control"
                          id="floatingLastName"
                          name="last_name"
                          placeholder="Last Name"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setFieldValue("last_name", event.target.value)}
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="last_name"
                          component="div"
                        />
                      </div>

                      <div className="mb-5 col-md-4">
                        <label htmlFor="floatingEmail">Email*</label>
                        <Field
                          type="email"
                          className="form-control"
                          id="floatingEmail"
                          name="email"
                          placeholder="name@example.com"
                          value={values.email}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setFieldValue("email", event.target.value)}
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="email"
                          component="div"
                        />
                      </div>

                      <div className="mb-5 col-md-4">
                        <label htmlFor="floatingphone">Mobile Number*</label>
                        <Field
                          type="tel"
                          className="form-control"
                          id="floatingphone"
                          name="mobile_number"
                          placeholder="Mobile Number"
                          value={values.mobile_number}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) =>
                            setFieldValue("mobile_number", event.target.value)
                          }
                          onKeyDown={(
                            e: React.KeyboardEvent<HTMLInputElement>
                          ) => {
                            if (
                              e.key !== "Backspace" &&
                              e.key !== "Tab" &&
                              e.key !== "ArrowLeft" &&
                              e.key !== "ArrowRight" &&
                              !/^[0-9]$/.test(e.key)
                            ) {
                              e.preventDefault();
                            }
                            if (
                              e.currentTarget.value.length >= 10 &&
                              /^[0-9]$/.test(e.key)
                            ) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="mobile_number"
                          component="div"
                        />
                      </div>

                      <div className="mb-5 col-md-4">
                        <label htmlFor="floatingDob">DOB*</label>
                        <Field
                          className="form-control"
                          type="date"
                          id="floatingDob"
                          name="date_of_birth"
                          style={{ cursor: "pointer" }}
                          value={values.date_of_birth}
                          placeholder="YYYY-MM-DD"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) =>
                            setFieldValue("date_of_birth", event.target.value)
                          }
                          max={new Date().toISOString().split("T")[0]}
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="date_of_birth"
                          component="div"
                        />
                      </div>

                      <div className="mb-5 col-md-12">
                        <label htmlFor="floatingaddress">Address*</label>
                        <Field
                          as="textarea"
                          className="form-control no-height"
                          id="floatingaddress"
                          name="address"
                          placeholder="Address"
                          value={values.address}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setFieldValue("address", event.target.value)}
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="address"
                          component="div"
                        />
                      </div>

                      {/* State Dropdown */}
                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingState">State*</label>
                        <Field
                          as="select"
                          className="form-select"
                          id="floatingState"
                          value={values.state_name}
                          name="state_name"
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            handleStateChange(e, setFieldValue)
                          }
                        >
                          <option value="" className="placeholder-option">
                            Select State
                          </option>
                          {state.map((item: any) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          className="errorMsg"
                          name="state_name"
                          component="div"
                        />
                      </div>

                      {/* City Dropdown */}
                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingCity">City*</label>
                        <Field
                          as="select"
                          className="form-select"
                          id="floatingCity"
                          name="city_name"
                          value={values.city_name}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            handleCityChange(e, setFieldValue)
                          }
                          disabled={!city.length} // Disable city dropdown if no cities are loaded
                        >
                          <option value="">Select City</option>
                          {city.map((item: any) => (
                            <option key={item.id} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          className="errorMsg"
                          name="city_name"
                          component="div"
                        />
                      </div>

                      {/* Zone Dropdown */}
                      {/* <div className="mb-5 col-md-4">
                        <label htmlFor="floatingZone">Zone*</label>
                        <Field
                          as="select"
                          className="form-select"
                          id="floatingZone"
                          name="zone_name"
                          value={values.zone_name}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setFieldValue("zone_name", event.target.value)}
                          disabled={!filteredZones.length}
                        >
                          <option value="">Select Zone*</option>
                          {filteredZones.map((zone) => (
                            <option key={zone.id} value={zone.name}>
                              {zone.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage className="errorMsg" name="zone_name" component="div" />
                      </div> */}

                      {/* <div className="mb-5 col-md-6">
                        <label htmlFor="floatingTeamName">Team Name*</label>
                        <Field
                          type="text"
                          className="form-control"
                          id="floatingTeamName"
                          name="team_name"
                          placeholder="Team Name"
                          value={values.team_name}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setFieldValue("team_name", event.target.value)}
                        />
                        <ErrorMessage className="errorMsg" name="team_name" component="div" />
                      </div> */}

                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingRole">Playing Role*</label>
                        <Field
                          as="select"
                          className="form-select"
                          id="floatingRole"
                          name="playing_role"
                          value={values.playing_role}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setFieldValue("playing_role", e.target.value)
                          }
                          required
                        >
                          <option value="">Select Playing Role</option>
                          <option value="Batsman">Batsman</option>
                          <option value="Bowler">Bowler</option>
                          <option value="All-rounder">All-rounder</option>
                          <option value="Wicket-keeper">Wicket-keeper</option>
                        </Field>
                        <ErrorMessage
                          className="errorMsg"
                          name="playing_role"
                          component="div"
                        />
                      </div>

                      {values.playing_role === "Batsman" ||
                      values.playing_role === "All-rounder" ? (
                        // || values.playing_role === 'Bowler'
                        <div className="mb-5 col-md-6">
                          <div className="lableIconWrap">
                            <label htmlFor="floatingBatsman">
                              Batting Style*
                            </label>
                            <img
                              src="images\batsman (1).svg"
                              alt="batsman-icon"
                              width={20}
                              height={20}
                              className="lazy-loading"
                            />
                          </div>
                          <Field
                            as="select"
                            className="form-select"
                            id="floatingBatsman"
                            name="batting_style"
                            value={values.batting_style}
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) => setFieldValue("batting_style", e.target.value)}
                          >
                            <option value="">Select Batting Style</option>
                            <option value="Right-hand">Right-hand</option>
                            <option value="Left-hand">Left-hand</option>
                          </Field>
                          <ErrorMessage
                            className="errorMsg"
                            name="batting_style"
                            component="div"
                          />
                        </div>
                      ) : null}

                      {values.playing_role === "Bowler" ||
                      values.playing_role === "All-rounder" ? (
                        <div className="mb-5 col-md-6">
                          <div className="lableIconWrap">
                            <label htmlFor="floatingBowling">
                              Bowling Style*
                            </label>
                            <img
                              src="images\Bowler (1).svg"
                              alt="bowler-icon"
                              width={20}
                              height={20}
                              className="lazy-loading"
                            />
                          </div>
                          <Field
                            as="select"
                            className="form-select"
                            id="floatingBowling"
                            name="bowling_style"
                            value={values.bowling_style}
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) => setFieldValue("bowling_style", e.target.value)}
                          >
                            <option value="">Select Bowling Style</option>
                            <option value="Right-arm Fast">
                              Right-arm Fast
                            </option>
                            <option value="Right-arm Medium">
                              Right-arm Medium
                            </option>
                            <option value="Left-arm Fast">Left-arm Fast</option>
                            <option value="Left-arm Medium">
                              Left-arm Medium
                            </option>
                            <option value="Right-arm Spin">
                              Right-arm Spin
                            </option>
                            <option value="Left-arm Spin">Left-arm Spin</option>
                          </Field>
                          <ErrorMessage name="bowling_style" component="div" />
                        </div>
                      ) : null}

                      {values.playing_role === "Wicket-keeper" ||
                      values.playing_role === "All-rounder" ? (
                        <div className="mb-5 col-md-6">
                          <div className="lableIconWrap">
                            <label htmlFor="floatingWicket">
                              Wicketkeeping*
                            </label>
                            <img
                              src="images\Wicketkeeper (1).svg"
                              alt="gloves-icon"
                              width={22}
                              height={22}
                              className="lazy-loading"
                            />
                          </div>
                          <div>
                            <Field
                              type="radio"
                              //   className="form-control"
                              id="floatingWicket"
                              value="yes"
                              name="wicket_keeping"
                              checked={values.wicket_keeping === "yes"}
                              onChange={(
                                e: React.ChangeEvent<HTMLSelectElement>
                              ) =>
                                setFieldValue("wicket_keeping", e.target.value)
                              }
                            />
                            <label
                              htmlFor="yes"
                              className="form-check-label"
                              style={{
                                marginRight: "3rem",
                                marginLeft: ".5rem",
                              }}
                            >
                              Yes
                            </label>
                            <Field
                              type="radio"
                              id="floatingWicket"
                              value="no"
                              name="wicket_keeping"
                              checked={values.wicket_keeping === "no"}
                              onChange={(
                                e: React.ChangeEvent<HTMLSelectElement>
                              ) =>
                                setFieldValue("wicket_keeping", e.target.value)
                              }
                            />
                            <label
                              htmlFor="no"
                              className="form-check-label"
                              style={{ marginLeft: ".5rem" }}
                            >
                              No
                            </label>
                          </div>
                          <ErrorMessage
                            className="errorMsg"
                            name="wicket_keeping"
                            component="div"
                          />
                        </div>
                      ) : null}

                      {/* Fourth Column */}
                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingPassword">Password*</label>
                        <div style={{ position: "relative" }}>
                          <Field
                            type={showPassword ? "text" : "password"}
                            // type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) => setFieldValue("password", e.target.value)}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "30%",
                              right: "11px",
                              fontSize: "1.5rem",
                            }}
                          >
                            <span onClick={togglePasswordVisibility}>
                              <i
                                className={`fa ${
                                  showPassword ? "fa-eye-slash" : "fa-eye"
                                }`}
                              />
                            </span>
                          </div>
                        </div>
                        <ErrorMessage
                          className="errorMsg"
                          name="password"
                          component="div"
                        />
                      </div>

                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingConfirmPassword">
                          Confirm Password*
                        </label>
                        <div style={{ position: "relative" }}>
                          <Field
                            type={showConfirmPassword ? "text" : "password"}
                            // type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            value={values.password_confirmation}
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                              setFieldValue(
                                "password_confirmation",
                                e.target.value
                              )
                            }
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "30%",
                              right: "11px",
                              fontSize: "1.5rem",
                            }}
                          >
                            <span onClick={toggleConfirmPasswordVisibility}>
                              <i
                                className={`fa ${
                                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                                }`}
                              />
                            </span>
                          </div>
                        </div>
                        <ErrorMessage
                          className="errorMsg"
                          name="password_confirmation"
                          component="div"
                        />
                      </div>

                      {/* Select Inputs */}
                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingBloodGroup">Blood Group*</label>
                        <Field
                          as="select"
                          className="form-select"
                          id="floatingBloodGroup"
                          name="blood_group"
                          value={values.blood_group}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setFieldValue("blood_group", e.target.value)
                          }
                        >
                          <option>Select Blood Group</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </Field>
                        <ErrorMessage
                          className="errorMsg"
                          name="blood_group"
                          component="div"
                        />
                      </div>

                      <div className="mb-5 col-md-6">
                        <label htmlFor="floatingSocialLink">Insta Link</label>
                        <Field
                          type="url"
                          className="form-control"
                          id="floatingSocialLink"
                          name="social_link"
                          placeholder="Enter URL"
                          value={values.social_link}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setFieldValue("social_link", e.target.value)
                          }
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="social_link"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 mx-auto">
                    <div className="row">
                      <div className="user-aadharPhoto mb-5 col-md-6">
                        <label htmlFor="profilePhoto">Profile Photo*</label>
                        <UploadFile
                          // id="floatingProfilePhoto"
                          name="doc_profile_photo"
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="doc_profile_photo"
                          component="div"
                        />
                      </div>

                      <div className="user-aadharPhoto mb-5 col-md-6">
                        <label htmlFor="floatingAadharPhoto">ID Card*</label>
                        <UploadFile
                          // id="floatingAadharPhoto"
                          name="doc_id_card"
                        />
                        <ErrorMessage
                          className="errorMsg"
                          name="doc_id_card"
                          component="div"
                        />
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

              <div className="col-md-12 text-center">
                <div className="paragraph">
                  <p>
                    Already have an account?{" "}
                    <a
                      href="/loginPage"
                      // style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Login now
                    </a>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default RegistrationForm;
