import React from "react";
import style from "./index.module.css";

const Code = ({ children }) => {
  return <div className={style.code}>{children}</div>;
};

export default Code;
