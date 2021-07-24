import React, { useState } from "react";
import style from "./index..module.css";
import instance from "../../axios";

const DeleteGoal = ({ id, active }) => {
  return (
    <div className={`${style.delete_goal} ${active ? style.active : ""}`}>
      <div className='close'>{"&#10006"}</div>
      <p>Are you sure you want to delete this goal?</p>
      <button className='btn-danger mt-5'>Yes</button>
    </div>
  );
};

export default DeleteGoal;
