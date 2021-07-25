import React from "react";
import style from "./index.module.css";

const Goal = ({ goalObject, setActiveId, setDetailsActive }) => {
  const getPercentage = () => {
    let steps = goalObject.steps_json ? JSON.parse(goalObject.steps_json) : [];
    let total = steps.length;
    if (!total) return false;
    let done = steps.filter((step) => step.completed).length;
    return ((done / total) * 100).toFixed(2);
  };

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
          {getPercentage() && (
            <div className={`${style.progress} center`}>
              <p>{getPercentage()}%</p>
              <span
                className={style.background}
                style={{
                  transform: `translateX(-${100 - getPercentage()}%)`,
                }}></span>
            </div>
          )}
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
