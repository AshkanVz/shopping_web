import React, { useState } from "react";
import TextButton from "../component/buttons/text/TextButton";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import { UserAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";

const ForgetPass = () => {
  const { resetPass } = UserAuth();
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async () => {
      try {
        await resetPass(formik.values.email);
        setAlert(true);
        formik.setValues = { email: "" };
      } catch (e) {
        setError(
          e.message == "Firebase: Error (auth/user-not-found)."
            ? "User not found"
            : null
        );
        console.log(e.message);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Required"),
    }),
  });
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-50">
      <div className=" mb-10 h-auto -mt-28">
        <h1 className="text-slate-800 font-semibold text-2xl mb-10 ">
          Input your email address for reset password
        </h1>
        {alert && (
          <Alert
            onClose={() => {
              setAlert(false);
            }}
          >
            <span className="font-semibold text-green-600">
              Check yout inbox!
            </span>
          </Alert>
        )}
        {error && (
          <Alert
            onClose={() => {
              setError(null);
            }}
            severity="error"
          >
            <span className="font-semibold text-red-600">{error}</span>
          </Alert>
        )}

        <form className="w-96 mx-auto" onSubmit={formik.handleSubmit}>
          <div className="my-6 h-20">
            <label htmlFor="email" className="block font-semibold">
              Email:*
            </label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              type={"text"}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email Address"
              id="email"
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-sm font-semibold">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <TextButton type={"submit"} text={"reset"} className="mx-0" />
        </form>
      </div>
    </div>
  );
};

export default LayoutWrapper(ForgetPass);
