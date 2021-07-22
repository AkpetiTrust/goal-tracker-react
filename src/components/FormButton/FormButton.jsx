import React from "react";
import style from "./FormButton.module.css";

const FormButton = ({ text, loading, type, className }) =>
  loading ? (
    <button type={type} disabled={loading} className={className}>
      <div className='center'>
        <span className={`${style.loading} d-flex justify-content-between`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </button>
  ) : (
    <button type={type} disabled={loading} className={className}>
      {text}
    </button>
  );

export default FormButton;
