import React, { useState } from "react";
import style from "./index.module.css";
import instance from "../../axios";
import FormButton from "../FormButton/FormButton";

const DeleteGoal = ({ id, active, setDeleteActive, deleteGoal }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteGoal(id, setLoading);
  };

  if (!id) {
    return <div></div>;
  }

  return (
    <div
      className={`${style.delete_goal} ${active ? style.active : ""} center`}>
      <div
        className={style.close}
        onClick={() => {
          setDeleteActive(false);
        }}>
        &#10006;
      </div>
      <div>
        <p>Are you sure you want to delete this goal?</p>
        <form onSubmit={handleSubmit}>
          <FormButton
            type='submit'
            text='Yes'
            loading={loading}
            className={style.delete_button}
          />
        </form>
      </div>
    </div>
  );
};

export default DeleteGoal;
