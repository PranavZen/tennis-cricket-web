import "./loginForm.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../homepg/Navigation/Navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginValidationSchema } from "../common/validation/Validation";
import Spinner from "../../components/common/spinner/Spinner";
import { notification } from "antd";

const LoginForm: React.FC = () => {
  const [showOtpField, setShowOtpField] = useState(false);
  const [timer, setTimer] = useState(120);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [showLoginWithOtpBtn, setShowLoginWithOtpBtn] = useState(true);
  const [isPasswordLogin, setIsPasswordLogin] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (showOtpField && timer > 0) {
      countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    }
    if (timer === 0) {
      setResendEnabled(true);
    }
    return () => clearTimeout(countdown);
  }, [timer, showOtpField]);

  const handleSubmit = async (
    values: {
      email: string;
      password: string;
      otp?: string;
      rememberMe: boolean;
    },
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoading(true);
    if (showOtpField) {
      if (values.otp === "123456") {
        toast.success("OTP verified successfully!");
        setShowOtpField(false);
        resetForm();
        setShowLoginWithOtpBtn(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/profilePage");
        }, 2000);
      } else {
        toast.error("Invalid OTP. Please try again.");
        setLoading(false);
      }
    } else {
      try {
        const response = await axios.post(
          "https://my.tc.popopower.com/api/post-login",
          {
            email: values.email,
            password: values.password,
          }
        );

        // console.log("responseLoginwqwqw", response.data.data.token);
        // localStorage.setItem("token", response.data.data.token);
        if (response.data) {
          notification.success({ message: "Login successfully!" });
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("firstName", response.data.data.user.first_name);
          localStorage.setItem("surname", response.data.data.user.surname);
          localStorage.setItem("cityName", response.data.data.user.cities_states_name);
          localStorage.setItem("profileImage", response.data.data.user.profile_image);
          localStorage.setItem("battingStyle", response.data.data.user.batting_style);
          localStorage.setItem("bowlingStyle", response.data.data.user.bowling_style);
          // console.log("tokenresponse", response);
          resetForm();
          setTimeout(() => {
            setLoading(false);
            navigate("/profilePage");
            // window.location.reload();
          }, 2000);
        } else {
          notification.error({
            message:
              response.data.error_message ||
              "Incorrect Details Please Try Again !!!",
          });
          setLoading(false);
        }
      } catch (error) {
        notification.error({
          message: "An error occurred during login. Please try again.",
        });
        setLoading(false);
      }
    }
  };

  //  handle verify otp
  const handleVerifyOTP = async (
    values: { email: string; otp: string }
    // resetForm: () => void
  ) => {
    if (!values.otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://my.tc.popopower.com/api/verify-otp",
        {
          email: values.email,
          otp: values.otp,
        }
      );

      if (response.data.remark) {
        notification.success({ message: "OTP verified successfully!" });
        localStorage.setItem("token", response.data.data.token);
        // console.log("otp responsetoken", response)
        // resetForm();
        setShowOtpField(false);
        setTimeout(() => {
          navigate("/profilePage");
        }, 1000);
      } else {
        notification.error({
          message: response.data.message || "Invalid OTP. Please try again.",
        });
      }
    } catch (error) {
      notification.error({ message: "An error occurred while verifying OTP." });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithOTP = (email: string, validateForm: () => void) => {
    validateForm();
    if (!email || !/^(?:[0-9]{10}|\S+@\S+\.\S+)$/.test(email)) {
      notification.error({
        message: "Please enter a valid email address or mobile number",
      });
    } else {
      try {
        const formData = new FormData();
        formData.append("email", email);

        const response = axios.post(
          `https://my.tc.popopower.com/api/send-otp`,
          formData
        );

        console.log("response", response);

        console.log("Sending OTP to email:", email);
        notification.success({ message: "OTP sent successfully!" });
        setShowOtpField(true);
        setTimer(120);
        setResendEnabled(false);
        setShowLoginWithOtpBtn(false);
        setIsPasswordLogin(false);
      } catch {}
    }
  };

  const handleResendOTP = async (email: string) => {
    if (!email) {
      notification.error({
        message: "Please enter a valid email address or mobile number",
      });
      return;
    }
    setIsResending(true);
    try {
      const response = await axios.post(
        "https://my.tc.popopower.com/api/send-otp",
        { email }
      );

      if (response.status === 200) {
        notification.success({ message: "OTP sent successfully!" });
        setResendEnabled(false);
      } else {
        notification.error({
          message: "Failed to send OTP. Please try again later.",
        });
      }
    } catch (error) {
      notification.error({ message: "An error occurred. Please try again." });
    } finally {
      setIsResending(false);
    }
  };

  const handleLoginWithPassword = () => {
    setIsPasswordLogin(true);
    setShowOtpField(false);
  };

  return (
    <>
      <section>
        <ToastContainer
          position="top-right"
          closeOnClick={true}
          className="toast-container"
        />
        <Navigation />
        <div className="login-form">
          <div className="container">
            {loading ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner />
                </div>
              </>
            ) : (
              <>
                <div className="login-page">
                  <h6>Login</h6>
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      otp: "",
                      rememberMe: false,
                    }}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, validateForm, handleChange }) => (
                      <Form className="form-fields">
                        <div className="row">
                          <div className="col-md-4 mx-auto">
                            <div className="input-field mb-3">
                              <label className="form-label">
                                Email address or Mobile Number
                              </label>
                              <Field
                                type="email"
                                name="email"
                                id="form2Example1"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="textdanger"
                              />
                            </div>

                            <div className="row">
                              <div>
                                {showLoginWithOtpBtn && (
                                  <p className="btm-text">
                                    <button
                                      type="button"
                                      className="otp-btn"
                                      onClick={() =>
                                        handleLoginWithOTP(
                                          values.email,
                                          validateForm
                                        )
                                      }
                                    >
                                      Login with OTP
                                    </button>
                                  </p>
                                )}
                                {!isPasswordLogin &&
                                  showOtpField && ( // Show "Login with Password" if OTP is not shown
                                    <p className="btm-text">
                                      <button
                                        type="submit"
                                        style={{
                                          fontSize: "1.5rem",
                                          color: "#fff",
                                        }}
                                        onClick={handleLoginWithPassword}
                                      >
                                        Login With Password
                                      </button>
                                    </p>
                                  )}
                              </div>
                            </div>

                            {!showOtpField && (
                              <div>
                                <div className="input-field mx-auto mb-2">
                                  <label className="form-label">Password</label>
                                  <Field
                                    type="password"
                                    name="password"
                                    id="form2Example2"
                                    className="form-control"
                                    value={values.password}
                                    onChange={handleChange}
                                  />
                                  <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="textdanger"
                                  />
                                </div>
                                <div className="mb-4 text-center">
                                  <div>
                                    <div className="form-check">
                                      <Field
                                        type="checkbox"
                                        name="rememberMe"
                                        id="form2Example31"
                                      />
                                      <label className="form-check-label">
                                        {" "}
                                        Remember me{" "}
                                      </label>
                                    </div>
                                  </div>
                                  <div>
                                    <a href="/forgotPassword">
                                      Forgot password?
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-12 sign-in">
                                  <button type="submit">
                                    {loading ? (
                                      <>
                                        <div style={{ width: "1" }}>
                                          <Spinner />
                                        </div>
                                      </>
                                    ) : (
                                      "Sign In"
                                    )}
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {showOtpField && (
                          <div>
                            <div className="input-field mb-2 col-md-4 mx-auto">
                              <label className="form-label">OTP</label>
                              <Field
                                type="text"
                                name="otp"
                                id="form2Example2"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="otp"
                                component="div"
                                className="textdanger"
                              />
                            </div>
                            <div
                              className="col-md-4 mx-auto otp-txt"
                              style={{
                                fontFamily: "Work Sans",
                                fontSize: "1.6rem",
                                color: "#fff",
                                fontWeight: "600",
                              }}
                            >
                              {!resendEnabled ? (
                                <p>
                                  OTP expires in{" "}
                                  {`${Math.floor(timer / 60)}:${(
                                    "0" +
                                    (timer % 60)
                                  ).slice(-2)}`}
                                </p>
                              ) : (
                                <div className="row">
                                  <button
                                    onClick={() =>
                                      handleResendOTP(values.email)
                                    }
                                    type="button"
                                    style={{
                                      fontFamily: "Work Sans",
                                      fontSize: "1.6rem",
                                      color: "#fff",
                                      fontWeight: "600",
                                    }}
                                    disabled={isResending}
                                  >
                                    {isResending
                                      ? "Resending OTP..."
                                      : "Resend OTP"}
                                  </button>
                                  {/* </div> */}
                                </div>
                              )}
                            </div>
                            <div className="col-md-4 text-center sign-in">
                              <button
                                type="button"
                                onClick={() => handleVerifyOTP(values)}
                              >
                                Verify OTP
                              </button>
                            </div>
                          </div>
                        )}
                        <div className="bottom-link">
                          <div className="paragraph">
                            <p>
                              Not a member?{" "}
                              <a href="/registrationPage">Register</a>
                            </p>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginForm;
