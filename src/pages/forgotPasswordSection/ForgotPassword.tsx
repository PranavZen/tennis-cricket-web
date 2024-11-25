import "../forgotPasswordSection/forgotPassword.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import Navigation from "../../components/homepg/Navigation/Navigation";
import { loginValidationSchema } from "../../components/common/validation/Validation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [showOtpField, setShowOtpField] = useState(false); // State to toggle fields
  const [resendEnabled, setResendEnabled] = useState(false); // Toggle for Resend OTP button
  const [isResending, setIsResending] = useState(false); // State for "Resending OTP..."
  const [timer, setTimer] = useState(120); // Timer state in seconds
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

  const handleSendOTP = (email: string) => {
    if (!email) {
      toast.error("Please enter a valid email address or mobile number");
      return;
    }
    setShowOtpField(true); // Show OTP input field
    setTimer(120); // Start the timer
    setResendEnabled(false); // Disable Resend OTP initially
    toast.success("OTP sent successfully!");
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

  const handleSubmit = (
    values: { email: string; otp?: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Submitted values:", values); // Debugging
    if (showOtpField) {
      if (values.otp === "123456") {
        console.log("OTP verified successfully:", values.otp);
        toast.success("OTP verified successfully! You can now log in.");
        setShowOtpField(false);
        resetForm();
        setTimeout(() => {
            navigate("/loginPage"); // Redirect to homepage after displaying the success message
          }, 5000); // 2-second delay
      } else {
        console.error("Invalid OTP:", values.otp);
        toast.error("Invalid OTP. Please try again.");
      }
    } else {
      toast.error("Please send OTP first.");
    }
  };

  return (
    <section>
      <ToastContainer
        position="top-right"
        closeOnClick={true}
        className="toast-container"
      />
      <Navigation />
      <div className="background-img">
        <div className="container">
          <div className="forgetpassword-page">
            <div className="heading">
              <h6>Reset Password</h6>
            </div>

            <Formik
              initialValues={{
                email: "",
                otp: "",
              }}
              // validationSchema={loginValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form className="form-fields mx-auto">
                  <div className="col-md-12">
                    <div className="input-field mb-3 mx-auto">
                      <label className="formLabelTypo mb-2">
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
                      <div className="col-md-4 mx-auto">
                        <div className="form-check justify-content-end">
                          {!showOtpField && (
                            <button
                              type="button"
                              className="sent-otp"
                              onClick={() => handleSendOTP(values.email)}
                            >
                              Send OTP
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {showOtpField && (
                      <>
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
                          className="col-md-4 mx-auto otp-timer"
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
                                {isResending
                                  ? "Resending OTP..."
                                  : "Resend OTP"}
                              </button>
                            </div>
                          )}
                        </div>

                        <div className="col-md-12 text-center sign-in">
                          {showOtpField && (
                            <button
                              type="submit" // Formik handles submission when this is of type "submit"
                              name="otp"
                              id="form2Example2"
                              disabled={isResending} // Optionally disable if OTP is being resent
                            >
                              Verify OTP
                            </button>
                          )}
                        </div>
                      </>
                    )}
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

export default ForgotPassword;
