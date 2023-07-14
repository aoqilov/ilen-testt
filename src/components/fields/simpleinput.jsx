import React from "react";
import eyes from "assets/imgbox/svg/Eye (1).svg";
import { useField } from "formik";

const simpleinput = ({ label, value, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="cus-input">
      <label className="cus-input__label">{label}</label>
      <div className="cus-input__wrap">
        <input {...field} {...props} className="wrap-input" type="text" />
      </div>
      {meta.touched && meta.error && (
        <p className="cus-input__text-error">{meta.error}</p>
      )}
    </div>
  );
};

export default simpleinput;
