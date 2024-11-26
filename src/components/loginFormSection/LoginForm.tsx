import "./loginForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../homepg/Navigation/Navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginValidationSchema } from "../common/validation/Validation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginForm: React.FC = () => {
  const [showOtpField, setShowOtpField] = useState(false); // State to toggle fields
  const [timer, setTimer] = useState(120); // Timer state in seconds
  const [resendEnabled, setResendEnabled] = useState(false); // Toggle for Resend OTP button
  const [isResending, setIsResending] = useState(false); // State for "Resending OTP..."
  const [showLoginWithOtpBtn, setShowLoginWithOtpBtn] = useState(true); // State to toggle visibility of Login with OTP button
  const [isPasswordLogin, setIsPasswordLogin] = useState(false); // State to track if we are showing password fields
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (showOtpField && timer > 0) {
      countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    }
    if (timer === 0) {
      setResendEnabled(true); // Enable "Resend OTP" button when timer ends
    }
    return () => clearTimeout(countdown); // Cleanup timeout
  }, [timer, showOtpField]);

  const handleSubmit = (
    values: {
      email: string;
      password: string;
      otp?: string;
      rememberMe: boolean;
    },
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form values:", values); // Debugging form values
    if (showOtpField) {
      if (values.otp === "123456") {
        // OTP logic
        console.log("OTP verified successfully:", values.otp);
        toast.success("OTP verified successfully!");
        setShowOtpField(false); // Hide OTP field after verification
        resetForm();
        setShowLoginWithOtpBtn(true);
        setTimeout(() => {
          navigate("/"); // Redirect to homepage after displaying the success message
        }, 5000); // 2-second delay
      } else {
        console.error("Invalid OTP:", values.otp);
        toast.error("Invalid OTP. Please try again.");
      }
    } else {
      console.log("Form data", values); // Password login logic
      toast.success("Login successfully!");
      resetForm();
      setShowLoginWithOtpBtn(true);
      setTimeout(() => {
        navigate("/"); // Redirect to homepage after displaying the success message
      }, 5000); // 2-second delay
    }
  };

  const handleLoginWithOTP = (email: string, validateForm: () => void) => {
    validateForm();

    if (!email || !/^(?:[0-9]{10}|\S+@\S+\.\S+)$/.test(email)) {
      toast.error("Please enter a valid email address or mobile number");
    } else {
      console.log("Sending OTP to email:", email); // Debugging
      toast.success("OTP sent successfully!");
      setShowOtpField(true);
      setTimer(120); // Reset timer to 2 minutes
      setResendEnabled(false); // Disable Resend OTP button
      setShowLoginWithOtpBtn(false); // Hide "Login with OTP" button after OTP is sent
      setIsPasswordLogin(false); // Ensure password login is hidden
    }
  };

  const handleResendOTP = (email: string) => {
    if (!email) {
      toast.error("Please enter a valid email address or mobile number");
      return;
    }
    setIsResending(true); // Show "Resending OTP..." message
    setTimeout(() => {
      setIsResending(false); // Stop "Resending OTP..." message
      setTimer(120); // Reset the timer
      setResendEnabled(false); // Disable "Resend OTP" button
      toast.success("OTP sent successfully!");
    }, 2000); // Simulating an API call with a 2-second delay
  };

  const handleLoginWithPassword = () => {
    setIsPasswordLogin(true); // Switch to password login mode
    setShowOtpField(false); // Hide OTP field
    // setShowLoginWithOtpBtn(false); // Hide Login with OTP button when in password mode
  };

  return (
    <section>
      <ToastContainer
        position="top-right"
        closeOnClick={true}
        className="toast-container"
      />
      <Navigation />
      <div className="login-form">
        <div className="container">
          <div className="login-page">
            <h6>Login</h6>
            <Formik
              initialValues={{
                email: "",
                password: "",
                otp: "",
                rememberMe: false,
              }}
              // validationSchema={loginValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, validateForm }) => (
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
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="textdanger"
                      />
                    </div>

                    <div className="row">
                      <div>
                        {showLoginWithOtpBtn && ( // Show this button only if showLoginWithOtpBtn is true
                          <p className="btm-text">
                            <button
                              type="button"
                              className="otp-btn"
                              onClick={() =>
                                handleLoginWithOTP(values.email, validateForm)
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
                                style={{ fontSize: "1.5rem", color: "#fff" }}
                                onClick={handleLoginWithPassword} // Switch to password mode
                              >
                                Login With Password
                              </button>
                            </p>
                          )}
                      </div>
                    </div>

                  {!showOtpField && ( // Show Password field when OTP field is not visible
                    <div>
                      <div className="input-field mx-auto mb-2">
                        <label className="form-label">Password</label>
                        <Field
                          type="password"
                          name="password"
                          id="form2Example2"
                          className="form-control"
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
                          <a href="/forgotPassword">Forgot password?</a>
                        </div>
                      </div>
                      <div className="col-md-12 sign-in">
                        <button type="submit">Sign in</button>
                      </div>
                    </div>
                  )}
                  </div>
                  </div>

                  {showOtpField && ( // Show OTP field when OTP field is visible
                    <div>
                      <div className="input-field mb-2 mx-auto">
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
                            {/* <div className="col-md-4 mx-auto otp-txt"> */}
                            {/* <div className="mb-3">
                          <button
                            type="submit"
                            style={{ fontSize: "1.5rem", color: "#fff" }}
                          >
                            Login With Password
                          </button>
                        </div> */}
                            <button
                              onClick={() => handleResendOTP(values.email)}
                              type="button"
                              style={{
                                fontFamily: "Work Sans",
                                fontSize: "1.6rem",
                                color: "#fff",
                                fontWeight: "600",
                              }}
                              disabled={isResending}
                            >
                              {isResending ? "Resending OTP..." : "Resend OTP"}
                            </button>
                            {/* </div> */}
                          </div>
                        )}
                      </div>
                      <div className="col-md-12 text-center sign-in">
                        <button
                          type="submit" // Formik handles submission when this is of type "submit"
                          disabled={isResending} // Optionally disable if OTP is being resent
                        >
                          Verify OTP
                        </button>
                      </div>
                    </div>
                  )}

                  {/* <div className="col-md-12 text-center sign-in">
                  <button type="submit">Sign in</button>
                </div> */}

                  <div className="bottom-link">
                    <div className="paragraph">
                      <p>
                        Not a member? <a href="/registrationPage">Register</a>
                      </p>
                      {/* <p>or sign up with:</p> */}

                      {/* <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button> */}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
