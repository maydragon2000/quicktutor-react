import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Error from "../../components/Error/Error";
import { attemptResetPassword } from "../../store/thunks/auth";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
    const { isVerify } = useSelector((state) => state.user);
    const { email } = useSelector((state) => state.user);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const initialValues = {
        password: "",
    };
    const [loding, setLoading] = useState(false);
    const validationSchema = Yup.object({
        password: Yup.string().min(5).max(255).required("Required"),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required")
    });
    const onSubmit = (values) => {
        setLoading(true);
        dispatch(attemptResetPassword({ ...values, email: email })).then((response) => {
            if (response == true)
                setLoading(false);
                navigate("/login");
        })
    };
    return (
        isVerify ? (<Formik
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
                                        <div className="card-header">Reset Password</div>
                                        <div className="card-body">
                                            <Form>
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
                                                            Reset Password
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
        </Formik>) : (<div className="register-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Reset Password</div>
                            <div className="card-body">
                                    <div className="row mb-3">
                                        
                                        <h1>You must verify email.</h1>
                                    </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

    );
};
export default ResetPassword;
