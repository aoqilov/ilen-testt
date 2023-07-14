import React from "react";
import { useField } from "formik";

const radioinput = ({ label, type, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="cus-radio">
      <label className="cus-radio__label">{label}</label>
      <div className="cus-radio__wrap">
        <input
          {...field}
          {...props}
          className="wrap-radio"
          type="radio"
          value={"user"}
          id={"user-radio"}
        />
        <label
          htmlFor={"user-radio"}
          className={`radio-btn ${field.value === "user" && "active"}`}
        >
          User
        </label>
        <input
          {...field}
          {...props}
          className="wrap-radio"
          type="radio"
          value={"admin"}
          id={"admin-radio"}
        />
        <label
          htmlFor={"admin-radio"}
          className={`radio-btn ${field.value === "admin" && "active"}`}
        >
          Adminstrator
        </label>
      </div>
      {meta.touched && meta.error && (
        <p className="cus-input__text-error">{meta.error}</p>
      )}
    </div>
  );
};

export default radioinput;
