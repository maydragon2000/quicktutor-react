import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { attemptGoogleLogin, attemptLogin } from "../../store/thunks/auth";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import "./style.css";
import NormalButton from "../../components/NormalButton";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [googleLoginUrl, setGoogleLoginUrl] = useState(null);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  useEffect(() => {
    dispatch(attemptGoogleLogin()).then((response) => {
      console.log(response, "response");
      setGoogleLoginUrl(response.url);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(5).max(255).required("Required"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    dispatch(attemptLogin(values)).then((response) => {
      if (response == true)
        navigate('/');
      else {
        setServerError("Email or password is wrong.")
        setLoading(false);
      }
    }).catch(({ response }) => {
      setLoading(false);
      // if (response.data.message) {
      //   setServerError(response.data.message);
      // }
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className="login-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                      <Form>
                        <div className="row mb-3">
                          <label
                            htmlFor="email"
                            className="col-md-4 col-form-label text-md-end"
                          >
                            Email Address
                          </label>
                          <div className="col-md-6">
                            <Field
                              name="email"
                              type="email"
                              placeholder="email"
                            />
                            <ErrorMessage name="email" component={Error} />
                          </div>
                        </div>
                        <div className="row mb-3 password">
                          <label
                            htmlFor="password"
                            className="col-md-4 col-form-label text-md-end"
                          >
                            Password
                          </label>
                          <div className="col-md-6">
                            <Field
                              name="password"
                              type="password"
                              placeholder="Password"
                            />
                            <ErrorMessage name="password" component={Error} />
                          </div>
                        </div>
                        <div className="row mb-3 remember">
                          <div className="col-md-6 offset-md-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                                id="remember"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-0 forgot">
                          <div className="col-md-8 offset-md-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-login"
                              disabled={!formik.dirty || !formik.isValid || loading}
                            >
                              Login
                            </button>
                            <Link to="/forgot">
                              Forgot your password?
                            </Link>
                          </div>
                        </div>
                        <div className="row mb-0 google-login">
                          <div className="col-md-8 offset-md-4">
                            {serverError && <Error>{serverError}</Error>}
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="col-md-8 offset-md-4">
                            <a
                              href={googleLoginUrl}
                              className="btn btn-google btn-user"
                            >
                              <i className="fa fa-google fa-fw"></i> Login with
                              Google
                            </a>
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
};
export default Login;
