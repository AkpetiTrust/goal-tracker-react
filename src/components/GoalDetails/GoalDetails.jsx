import { React, useState } from "react";
import style from "./index.module.css";

const GoalDetails = ({ goalObject, active, setDetailsActive }) => {
  if (!goalObject) return <div></div>;

  return (
    <div className={`${style.goal_details} ${active ? style.active : ""}`}>
      <div
        className={style.close}
        onClick={() => {
          setDetailsActive(false);
        }}>
        <svg
          width='21'
          height='23'
          viewBox='0 0 21 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10.5 0.825928C4.70156 0.825928 0 5.62785 0 11.5501C0 17.4723 4.70156 22.2742 10.5 22.2742C16.2984 22.2742 21 17.4723 21 11.5501C21 5.62785 16.2984 0.825928 10.5 0.825928ZM14.3766 15.6243L12.8297 15.6171L10.5 12.7805L8.17266 15.6147L6.62344 15.6219C6.52031 15.6219 6.43594 15.5381 6.43594 15.4304C6.43594 15.3849 6.45234 15.3418 6.48047 15.3059L9.52969 11.5956L6.48047 7.88758C6.45215 7.8525 6.43643 7.80857 6.43594 7.76311C6.43594 7.65778 6.52031 7.5716 6.62344 7.5716L8.17266 7.57879L10.5 10.4154L12.8273 7.58118L14.3742 7.574C14.4773 7.574 14.5617 7.65778 14.5617 7.7655C14.5617 7.81098 14.5453 7.85407 14.5172 7.88998L11.4727 11.5979L14.5195 15.3083C14.5477 15.3442 14.5641 15.3873 14.5641 15.4328C14.5641 15.5381 14.4797 15.6243 14.3766 15.6243Z'
            fill='white'
          />
        </svg>
      </div>
      <h4 className='mb-5 mobile-none'>Details</h4>
      <div className={style.top}>
        <p className={style.title}>{goalObject.name}</p>
      </div>
      <div className='steps'>
        <hr />
        <div className='steps-main'></div>
        <hr />
        <div className={style.settings}>
          <p className={`${style.title} mb-4`}>Edit</p>
          <form className='mt-1'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              id='name'
              key={goalObject.name + "name"}
              defaultValue={goalObject.name}
            />
            <label htmlFor='deadline'>Deadline:</label>
            <input
              type='date'
              name='deadline'
              defaultValue={goalObject.deadline}
              id='deadline'
              key={goalObject.name + "deadline"}
            />
            <label htmlFor='description'>Description:</label>
            <textarea
              name='description'
              id='description'
              key={goalObject.name + "description"}
              defaultValue={goalObject.description}></textarea>
            <button type='submit'>EDIT</button>
          </form>
          <p className={style.delete}>Delete goal</p>
        </div>
      </div>
    </div>
  );
};

export default GoalDetails;
