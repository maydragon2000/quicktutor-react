import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Error from "../../components/Error/Error";
import { decode as base64decode } from 'base-64';
import { useNavigate } from "react-router-dom";
import { resetPasswordVerify } from "../../store/actions/user";
const VerifyCode = () => {
    const { email } = useSelector((state) => state.user);
    const initialValues = {
        code: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const verifyCode = base64decode(localStorage.getItem("verifycode"));
    const validationSchema = Yup.object({
        code: Yup.string().required("Required"),
    });
    const onSubmit = (values) => {
        if (values.code == verifyCode) {

            dispatch(resetPasswordVerify(email));
            navigate("/resetpassword");
        }
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
                                        <div className="card-header">Verify</div>
                                        <div className="card-body">
                                            <div class="alert alert-success" role="alert">
                                                A fresh verification code has been sent to your email address.
                                            </div>
                                            Before proceeding, please check your email for a verification code.
                                            <Form>
                                                <div className="row mb-3">
                                                    <label
                                                        htmlFor="email"
                                                        className="col-md-4 col-form-label text-md-end"
                                                    >
                                                        Verify Code
                                                    </label>
                                                    <div className="col-md-6">
                                                        <Field
                                                            name="code"
                                                            type="string"
                                                            placeholder="code"
                                                        />
                                                        <ErrorMessage name="code" component={Error} />
                                                    </div>
                                                </div>
                                                <div className="row mb-0 forgot">
                                                    <div className="col-md-8 offset-md-4">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary btn-login"
                                                            disabled={!formik.dirty || !formik.isValid}
                                                        >
                                                            Verify
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
                )
            }}
        </Formik>)
}

export default VerifyCode;