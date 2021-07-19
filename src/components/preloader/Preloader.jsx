import React from "react";
import style from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={`${style.preloader} center`}>
      <div className={style.flex}>
        <div className={style.flex_column}></div>
        <div className={style.flex_column}></div>
      </div>
      <div className={`${style.talk} center`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h3>GOALS</h3>
      </div>
    </div>
  );
};

export default Preloader;
