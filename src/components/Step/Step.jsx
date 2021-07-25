import React, { useEffect } from "react";
import style from "./index.module.css";
import instance from "../../axios";

const Step = ({ step, goal_id, setSteps, fetchGoals }) => {
  useEffect(() => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : "";

    instance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }, []);

  const updateSteps = (steps, goal_id) => {
    steps = JSON.stringify(steps);
    instance.post("/update-steps", { steps, goal_id }).then(() => {
      fetchGoals();
    });
  };

  const deleteStep = () => {
    setSteps((prevSteps) => {
      const newSteps = prevSteps.filter((eachStep) => eachStep.id !== step.id);
      updateSteps(newSteps, goal_id);
      return newSteps;
    });
  };

  return (
    <div className={style.step}>
      <div className='row mb-3'>
        <div className='col-2 center justify-content-start'>
          <input
            type='checkbox'
            name={`${goal_id}>${step.id}`}
            id={`${goal_id}>${step.id}`}
            key={`${goal_id}>${step.id}${step.completed ? "completed" : ""}`}
            defaultChecked={step.completed}
            onChange={(e) => {
              let completed = e.currentTarget.checked;
              setSteps((prevSteps) => {
                prevSteps.forEach((eachStep) => {
                  if (eachStep.id === step.id) {
                    eachStep.completed = completed;
                  }
                });
                updateSteps(prevSteps, goal_id);
                return prevSteps;
              });
            }}
          />
          <label htmlFor={`${goal_id}>${step.id}`}></label>
        </div>
        <div className={`col-8 center ${style.step_name}`}>{step.name}</div>
        <div className='col-2 center justify-content-end'>
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            className={`${style.icon} img-fluid`}
            onClick={deleteStep}
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.25 6.25H17.25V4.29688C17.25 3.43506 16.5773 2.73438 15.75 2.73438H8.25C7.42266 2.73438 6.75 3.43506 6.75 4.29688V6.25H3.75C3.33516 6.25 3 6.59912 3 7.03125V7.8125C3 7.91992 3.08437 8.00781 3.1875 8.00781H4.60312L5.18203 20.7764C5.21953 21.6089 5.88047 22.2656 6.67969 22.2656H17.3203C18.1219 22.2656 18.7805 21.6113 18.818 20.7764L19.3969 8.00781H20.8125C20.9156 8.00781 21 7.91992 21 7.8125V7.03125C21 6.59912 20.6648 6.25 20.25 6.25ZM15.5625 6.25H8.4375V4.49219H15.5625V6.25Z'
              fill='#FDB095'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Step;
