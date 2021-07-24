import React from "react";
import style from "./index.module.css";

const Goal = ({ goalObject, setActiveId, setDetailsActive }) => {
  return (
    <div className={style.goal}>
      <div className='row gx-5'>
        <div className='col-6'>
          <p className={style.goal_name}>{goalObject.name}</p>
        </div>
        <div className='col-6 d-flex flex-column'>
          <p className={style.date}>
            {goalObject.deadline &&
              new Date(goalObject.deadline).toLocaleDateString()}
          </p>
        </div>
      </div>
      <p
        className={style.details}
        onClick={() => {
          setActiveId(goalObject.id);
          setDetailsActive(true);
        }}>
        Details
      </p>
      <hr />
    </div>
  );
};

export default Goal;
