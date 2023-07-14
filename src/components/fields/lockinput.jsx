import React, { useState } from "react";
import eyes from "assets/imgbox/svg/Eye (1).svg";
import eyesOff from "assets/imgbox/svg/Eye Off.svg";
import { useField } from "formik";

const lockinput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);
  return (
    <div className="cus-input">
      <label className="cus-input__label">{label}</label>
      <div className="cus-input__wrap">
        <input
          {...field}
          {...props}
          className="wrap-input"
          type={`${show ? "text" : "password"}`}
        />
        <div className={` wrap-img`} onClick={() => setShow(() => !show)}>
          {show ? (
            <img src={eyesOff} alt="asd" />
          ) : (
            <img src={eyes} alt="asd" />
          )}
        </div>
      </div>
      {meta.touched && meta.error && (
        <p className="cus-input__text-error">{meta.error}</p>
      )}
    </div>
  );
};

export default lockinput;
