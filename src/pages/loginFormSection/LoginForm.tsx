import "../loginFormSection/loginForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../../components/homepg/Navigation/Navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginValidationSchema } from "../../components/common/validation/Validation";

const LoginForm: React.FC = () => {

  const handleSubmit = (
    values: { email: string; password: string; rememberMe: boolean },
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form data", values);
    toast.success("Login successfully!");
    resetForm();
  };

  return (
    <section>
      <ToastContainer position="bottom-right" closeOnClick={true} />
      <Navigation />
      <div className="login-form">
        <div className="container">
          <h6>Login</h6>
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
          >
            {({}) => (
              <Form className="form-fields">
                <div className="col-md 12">
                  <div className="input-field mb-4">
                    <label className="form-label">Email address</label>
                    <Field
                      type="email"
                      name="email"
                      id="form2Example1"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="input-field mb-4">
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
                      className="text-danger"
                    />
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <div>
                    <div className="form-check">
                      <Field
                        type="checkbox"
                        name="rememberMe"
                        id="form2Example31"
                      />
                      <label className="form-check-label"> Remember me </label>
                    </div>
                  </div>

                  <div>
                    <a href="#">Forgot password?</a>
                  </div>
                </div>

                <div className="col-md-12 text-center sign-in">
                  <button>Sign in</button>
                </div>

                <div className="text-center">
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
