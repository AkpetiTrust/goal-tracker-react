import { React, useState, useEffect } from "react";
import style from "./index.module.css";
import FormButton from "../FormButton/FormButton";
import instance from "../../axios";
import Step from "../Step/Step";
import AddStep from "../AddStep/AddStep";

const GoalDetails = ({
  goalObject,
  active,
  setDetailsActive,
  setDeleteID,
  setDeleteActive,
  editActive,
  setEditActive,
  fetchGoals,
}) => {
  const [steps, setSteps] = useState(
    goalObject?.steps_json ? JSON.parse(goalObject?.steps_json) : []
  );

  const [goalId, setGoalId] = useState(goalObject?.id);

  const [stepsSet, setStepsSet] = useState(false);

  const [addFormShown, setAddFormShown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : "";

    instance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };

    if (!stepsSet || goalId !== goalObject?.id) {
      if (goalObject) {
        setSteps(
          JSON.parse(goalObject.steps_json)
            ? JSON.parse(goalObject.steps_json)
            : []
        );
        setStepsSet(true);
        setGoalId(goalObject.id);
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditActive(true);
    const id = goalObject.id;
    const name = e.currentTarget.name.value;
    const description = e.currentTarget.description.value;
    const deadline = e.currentTarget.deadline.value;
    instance.post("/edit", { id, name, description, deadline }).then(() => {
      setEditActive(false);
      fetchGoals();
    });
  };

  const getProgress = () => {
    let total = steps.length;
    if (!total) return "";
    let done = steps.filter((step) => step.completed).length;
    return <p className={style.progress}>{`${done}/${total}`}</p>;
  };

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
        <div className='row'>
          <div className='col-9'>
            <p className={style.title}>{goalObject.name}</p>
          </div>
          <div
            className={`col-3 d-flex flex-column align-items-end justify-content-start ${style.date}`}>
            {getProgress()}
            <p>
              {goalObject.deadline &&
                new Date(goalObject.deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className='steps'>
        <hr />
        <div className='steps-main pb-4'>
          {steps.map((step) => (
            <Step
              step={step}
              key={`${goalObject.id}>${step.id}`}
              setSteps={setSteps}
              goal_id={goalObject.id}
              fetchGoals={fetchGoals}
            />
          ))}
          <div className='add-step d-flex justify-content-between mt-5'>
            <AddStep
              shown={!steps.length || addFormShown}
              setShown={setAddFormShown}
              setSteps={setSteps}
              goal_id={goalObject.id}
              fetchGoals={fetchGoals}
            />
            <svg
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              className={`${style.icon} img-fluid`}
              onClick={() => setAddFormShown(true)}
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12 23.4375C9.21523 23.4375 6.54451 22.2852 4.57538 20.234C2.60625 18.1828 1.5 15.4008 1.5 12.5C1.5 9.59919 2.60625 6.8172 4.57538 4.76602C6.54451 2.71484 9.21523 1.5625 12 1.5625C14.7848 1.5625 17.4555 2.71484 19.4246 4.76602C21.3938 6.8172 22.5 9.59919 22.5 12.5C22.5 15.4008 21.3938 18.1828 19.4246 20.234C17.4555 22.2852 14.7848 23.4375 12 23.4375ZM12 25C15.1826 25 18.2348 23.683 20.4853 21.3388C22.7357 18.9946 24 15.8152 24 12.5C24 9.18479 22.7357 6.00537 20.4853 3.66117C18.2348 1.31696 15.1826 0 12 0C8.8174 0 5.76516 1.31696 3.51472 3.66117C1.26428 6.00537 0 9.18479 0 12.5C0 15.8152 1.26428 18.9946 3.51472 21.3388C5.76516 23.683 8.8174 25 12 25Z'
                fill='white'
              />
              <path
                d='M12 6.25C12.1989 6.25 12.3897 6.33231 12.5303 6.47882C12.671 6.62534 12.75 6.82405 12.75 7.03125V11.7188H17.25C17.4489 11.7188 17.6397 11.8011 17.7803 11.9476C17.921 12.0941 18 12.2928 18 12.5C18 12.7072 17.921 12.9059 17.7803 13.0524C17.6397 13.1989 17.4489 13.2812 17.25 13.2812H12.75V17.9688C12.75 18.176 12.671 18.3747 12.5303 18.5212C12.3897 18.6677 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.6677 11.4697 18.5212C11.329 18.3747 11.25 18.176 11.25 17.9688V13.2812H6.75C6.55109 13.2812 6.36032 13.1989 6.21967 13.0524C6.07902 12.9059 6 12.7072 6 12.5C6 12.2928 6.07902 12.0941 6.21967 11.9476C6.36032 11.8011 6.55109 11.7188 6.75 11.7188H11.25V7.03125C11.25 6.82405 11.329 6.62534 11.4697 6.47882C11.6103 6.33231 11.8011 6.25 12 6.25Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
        <hr />
        <div className={style.settings}>
          <p className={`${style.title} mb-4`}>Edit</p>
          <form className='mt-1' onSubmit={handleSubmit}>
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
            <FormButton type='submit' loading={editActive} text='EDIT' />
          </form>
          <p
            className={style.delete}
            onClick={() => {
              setDeleteID(goalObject.id);
              setDeleteActive(true);
            }}>
            Delete goal
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalDetails;
