import React, { useState, useEffect } from "react";
import style from "./index.module.css";

const Alert = ({ activeProp }) => {
  const [active, setActive] = useState(activeProp);

  useEffect(() => {
    setActive(activeProp);
  }, [activeProp]);

  return (
    <div className={`${style.my_alert} center ${active ? style.active : ""}`}>
      <div
        className={style.close}
        onClick={() => {
          setActive(false);
        }}>
        &#10006;
      </div>
      <p>Message sent successfully 👍.</p>
    </div>
  );
};

export default Alert;
