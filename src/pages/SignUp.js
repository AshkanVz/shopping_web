import React, { useState } from "react";
import TextButton from "../component/buttons/text/TextButton";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, user } = UserAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async () => {
      setError("");
      try {
        setError("");
        await createUser(formik.values.email, formik.values.password);
        navigate("/dashboard");
      } catch (e) {
        setError("Failed to create an account");
        console.log(e.message);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email address")
        .required("Required"),
      password: Yup.string()
        .min(6, "at least 6 characters must be")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
  });
  return (
    <div className="w-full min-h-screen flex  justify-center bg-slate-50">
      <div className=" w-96 h-auto my-10">
        <div className="mb-14 text-center">
          <Link
            to="/login"
            className="text-5xl font-semibold text-slate-300 text-center"
          >
            Login
          </Link>
          <span className="text-5xl font-semibold text-slate-300 text-center mx-4">
            /
          </span>

          <span className="text-5xl font-semibold text-slate-800 text-center">
            Sign Up
          </span>
        </div>
        {error ? (
          <Alert
            severity="error"
            onClose={() => {
              setError(null);
            }}
          >
            <span className="font-semibold text-red-600">{error}</span>
          </Alert>
        ) : null}
        <form onSubmit={formik.handleSubmit}>
          <div className="my-8 h-20">
            <label htmlFor="email" className="block font-semibold">
              Email:*
            </label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="email"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-sm font-semibold">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <div className="my-8 h-20">
            <label htmlFor="password" className="block font-semibold ">
              Password:*
            </label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-500 text-sm font-semibold">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <div className="my-8 h-20">
            <label htmlFor="confirm-password" className="block font-semibold">
              Confirm Password:*
            </label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="confirm-password"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <span className="text-red-500 text-sm font-semibold">
                {formik.errors.confirmPassword}
              </span>
            ) : null}
          </div>
          <TextButton
            disabled={user}
            text={"Sign Up"}
            type={"submit"}
            className="mx-0 disabled:bg-opacity-50 disabled:hover:bg-slate-800 disabled:hover:bg-opacity-50 disabled:hover:text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default LayoutWrapper(SignUp);
