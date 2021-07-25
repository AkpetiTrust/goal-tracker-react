import React, { useEffect } from "react";
import style from "./index.module.css";
import instance from "../../axios";

const AddStep = ({ shown, setShown, setSteps, goal_id, fetchGoals }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.step_name.value;
    if (!name) {
      setShown(false);
      return;
    }

    let step = { name };
    step.completed = false;

    setSteps((prevSteps) => {
      let newSteps = [...prevSteps].sort((a, b) => a.id - b.id);
      let id;
      if (!newSteps.length) {
        id = 1;
        step.id = id;
        newSteps.push(step);
        updateSteps(newSteps, goal_id);
        return newSteps;
      }

      id = newSteps[newSteps.length - 1].id + 1;
      step.id = id;
      newSteps.push(step);
      updateSteps(newSteps, goal_id);
      return newSteps;
    });

    setShown(false);
    e.currentTarget.reset();
  };

  return (
    <form
      className={`${style.add_goal} ${shown ? style.shown : ""}`}
      onSubmit={handleSubmit}>
      <input type='text' name='step_name' placeholder='Add step' />
      <button type='submit'>SAVE</button>
    </form>
  );
};

export default AddStep;
