import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Error from "../../components/Error/Error";
import {
  attemptRegister,
  attemptResendConfirmation,
  attemptResetRegister,
} from "../../store/thunks/auth";
import "./style.css";
const Register = () => {
  const { isAuth } = useSelector((state) => state.user);
  const [serverError, setServerError] = useState("");
  const [user, setUser] = useState();
  const [registerStep, setRegisterStep] = useState("register"); // Use an enum with TS;

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const [loding, setLoading] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string().min(5).max(255).email().required("Required"),
    name: Yup.string().min(3).max(50).required("Required"),
    password: Yup.string().min(5).max(255).required("Required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required")
  });
  const onSubmit = (values) => {
    setLoading(true);
    dispatch(attemptRegister(values))
      .then(() => {
        setLoading(false);
        setUser(values);
        setRegisterStep("resend");
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          setServerError(error.response.data.message);
        }
      });
  };

  const onResendEmail = () => {

    dispatch(attemptResendConfirmation(user))
      .then(() => {
        // setRegisterStep("reset");
      })
      .catch((error) => {
        if (error.response) {
          setServerError(error.response.data.message);
        }
      });
  };

  const onReset = () => {
    dispatch(attemptResetRegister(user)).catch((error) => {
      if (error.response) {
        setServerError(error.response.data.message);
      }
    });
  };
  function renderSwitch() {
    switch (registerStep) {
      case "register":
        return (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <div className="register-area">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <div className="card">
                          <div className="card-header">Register</div>

                          <div className="card-body">
                            <Form>
                              <div className="row mb-3">
                                <label
                                  htmlFor="name"
                                  className="col-md-4 col-form-label text-md-end"
                                >
                                  Name
                                </label>

                                <div className="col-md-6">
                                  <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="name"
                                  />
                                  <ErrorMessage
                                    name="name"
                                    component={Error}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label
                                  htmlFor="email"
                                  className="col-md-4 col-form-label text-md-end"
                                >
                                  Email Address
                                </label>

                                <div className="col-md-6">
                                  <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component={Error}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label
                                  htmlFor="password"
                                  className="col-md-4 col-form-label text-md-end"
                                >
                                  Password
                                </label>
                                <div className="col-md-6">
                                  <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                  />
                                  <ErrorMessage
                                    name="password"
                                    component={Error}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label
                                  htmlFor="password-confirm"
                                  className="col-md-4 col-form-label text-md-end"
                                >
                                  Confirm Password
                                </label>

                                <div className="col-md-6">
                                  <Field
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    type="password"
                                    placeholder="passwordConfirm"
                                  />
                                  <ErrorMessage
                                    name="passwordConfirm"
                                    component={Error}
                                  />
                                </div>
                              </div>
                              <div className="row mb-0">
                                <div className="col-md-6 offset-md-4">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-register"
                                    disabled={!formik.dirty || !formik.isValid || loding}
                                  >
                                    Register
                                  </button>
                                </div>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>
        );
      case "resend":
        return (
          <div class="verify">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="card">
                    <div class="card-header">Verify Your Email Address</div>
                    <div class="card-body">
                      <div class="alert alert-success" role="alert">
                        A fresh verification link has been sent to your email address.
                      </div>
                      Before proceeding, please check your email for a verification link.
                      If you did not receive the email
                      <button onClick={onResendEmail} class="btn btn-link p-0 m-0 align-baseline">click here to request another</button>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "reset":
        return (
          <div className="container">
            <p>Still not received an email? </p>
            <p>Try to register again. You may have given the wrong email. </p>
            <p>
              If you want to be able to use the same name, reset the
              registration :
            </p>
            <button onClick={onReset}>
              Click here to reset the registration
            </button>
            {serverError && <Error>{serverError}</Error>}
          </div>
        );
      default:
        break;
    }
  }
  return <>{renderSwitch()}</>;
};
export default Register;
