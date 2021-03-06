import { React, useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import instance from "../../axios";
import Goal from "../../components/Goal/Goal";
import GoalDetails from "../../components/GoalDetails/GoalDetails";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import DeleteGoal from "../../components/DeleteGoal/DeleteGoal";

const GoalPage = ({ history, match }) => {
  const [navItems] = useState([
    {
      name: "GOALS",
      path: "/goals",
    },
    {
      name: "HELP",
      path: "/help",
    },
    {
      name: (
        <span className='d-flex justify-content-between align-items-center'>
          LOGOUT{" "}
          <svg
            width='18'
            height='16'
            viewBox='0 0 18 16'
            fill='none'
            className='img-fluid mx-2'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3 0C2.20435 0 1.44129 0.272858 0.87868 0.758548C0.316071 1.24424 0 1.90297 0 2.58984V12.9492C0 13.6361 0.316071 14.2948 0.87868 14.7805C1.44129 15.2662 2.20435 15.5391 3 15.5391H8C8.26522 15.5391 8.51957 15.4481 8.70711 15.2862C8.89464 15.1243 9 14.9047 9 14.6758C9 14.4468 8.89464 14.2272 8.70711 14.0653C8.51957 13.9035 8.26522 13.8125 8 13.8125H3C2.73478 13.8125 2.48043 13.7215 2.29289 13.5597C2.10536 13.3978 2 13.1782 2 12.9492V2.58984C2 2.36089 2.10536 2.14131 2.29289 1.97941C2.48043 1.81752 2.73478 1.72656 3 1.72656H8C8.26522 1.72656 8.51957 1.63561 8.70711 1.47371C8.89464 1.31182 9 1.09224 9 0.863281C9 0.634325 8.89464 0.414746 8.70711 0.252849C8.51957 0.0909525 8.26522 0 8 0H3Z'
              fill='white'
            />
            <path
              d='M12.293 3.70613C12.4805 3.54429 12.7348 3.45337 13 3.45337C13.2651 3.45337 13.5195 3.54429 13.707 3.70613L17.707 7.15925C17.8944 7.32114 17.9998 7.54068 17.9998 7.76959C17.9998 7.9985 17.8944 8.21804 17.707 8.37993L13.707 11.8331C13.5184 11.9903 13.2658 12.0773 13.0036 12.0754C12.7414 12.0734 12.4906 11.9826 12.3052 11.8225C12.1198 11.6625 12.0146 11.446 12.0123 11.2196C12.01 10.9933 12.1108 10.7752 12.293 10.6124L14.586 8.63287H7C6.73478 8.63287 6.48043 8.54192 6.29289 8.38002C6.10536 8.21813 6 7.99855 6 7.76959C6 7.54063 6.10536 7.32106 6.29289 7.15916C6.48043 6.99726 6.73478 6.90631 7 6.90631H14.586L12.293 4.92681C12.1055 4.76492 12.0002 4.54538 12.0002 4.31647C12.0002 4.08755 12.1055 3.86802 12.293 3.70613Z'
              fill='white'
            />
          </svg>
        </span>
      ),
      path: "/logout",
    },
  ]);

  const [user, setUser] = useState({ name: "User" });

  const [goals, setGoals] = useState([]);

  const [goalsToShow, setGoalsToShow] = useState([]);

  const [activeId, setActiveId] = useState(
    match.params.id ? Number(match.params.id) : 1
  );

  const [detailsActive, setDetailsActive] = useState(!!match.params.id);

  const [deleteActive, setDeleteActive] = useState(false);

  const [deleteID, setDeleteID] = useState(activeId);

  const [editActive, setEditActive] = useState(false);

  const findGoalById = (id) => goals.find((goal) => goal.id === id);

  const fetchGoals = () => {
    instance.get("/goals").then((response) => {
      setGoals(response.data.goals);
      setGoalsToShow(response.data.goals);
    });
  };

  const deleteGoal = (goal_id, setLoading) => {
    setLoading(true);
    instance.post("/delete", { goal_id }).then(() => {
      setDeleteActive(false);
      setDetailsActive(false);
      setLoading(false);
      setActiveId(1);
      fetchGoals();
    });
  };

  const filterGoalsToShow = (e) => {
    let value = e.currentTarget.value;
    if (!value) {
      setGoalsToShow(goals);
      return;
    }

    value = value.trim().toLowerCase();

    let filtered = goals.filter(
      (goalObject) =>
        String(goalObject.name).trim().toLowerCase().includes(value) ||
        String(goalObject.description).trim().toLowerCase().includes(value)
    );

    setGoalsToShow(filtered);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : "";

    instance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };

    instance
      .get("/profile")
      .then((response) => {
        const user = response.data.user;
        setUser(user);
      })
      .then(fetchGoals())
      .catch(() => {
        history.push("/signup");
      });
  }, []);

  return (
    <div className='goal-page'>
      <svg
        width='23'
        height='22'
        viewBox='0 0 23 22'
        fill='none'
        className='notification'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.6875 11.4029V9.625H17.25V11.6875C17.25 11.8698 17.3258 12.0447 17.4606 12.1736L19.4062 14.0346V15.125H3.59375V14.0346L5.53941 12.1736C5.67421 12.0447 5.74996 11.8698 5.75 11.6875V8.9375C5.748 7.97142 6.01256 7.02194 6.51697 6.18497C7.02138 5.34799 7.74777 4.65316 8.62277 4.17065C9.49777 3.68815 10.4904 3.43505 11.5004 3.43694C12.5104 3.43882 13.502 3.69561 14.375 4.18137V2.64481C13.6908 2.35505 12.9631 2.17036 12.2188 2.09756V0.6875H10.7812V2.09687C9.00922 2.26939 7.36702 3.06427 6.17217 4.3278C4.97733 5.59133 4.31473 7.23376 4.3125 8.9375V11.4029L2.36684 13.2639C2.23204 13.3928 2.15629 13.5677 2.15625 13.75V15.8125C2.15625 15.9948 2.23198 16.1697 2.36677 16.2986C2.50156 16.4276 2.68438 16.5 2.875 16.5H7.90625V17.1875C7.90625 18.0992 8.28488 18.9735 8.95884 19.6182C9.63279 20.2628 10.5469 20.625 11.5 20.625C12.4531 20.625 13.3672 20.2628 14.0412 19.6182C14.7151 18.9735 15.0938 18.0992 15.0938 17.1875V16.5H20.125C20.3156 16.5 20.4984 16.4276 20.6332 16.2986C20.768 16.1697 20.8438 15.9948 20.8438 15.8125V13.75C20.8437 13.5677 20.768 13.3928 20.6332 13.2639L18.6875 11.4029ZM13.6562 17.1875C13.6562 17.7345 13.4291 18.2591 13.0247 18.6459C12.6203 19.0327 12.0719 19.25 11.5 19.25C10.9281 19.25 10.3797 19.0327 9.9753 18.6459C9.57093 18.2591 9.34375 17.7345 9.34375 17.1875V16.5H13.6562V17.1875Z'
          fill='white'
        />
        <path
          d='M18.6875 8.25C20.2753 8.25 21.5625 7.01878 21.5625 5.5C21.5625 3.98122 20.2753 2.75 18.6875 2.75C17.0997 2.75 15.8125 3.98122 15.8125 5.5C15.8125 7.01878 17.0997 8.25 18.6875 8.25Z'
          fill='white'
        />
      </svg>
      <main className='px-5'>
        <Nav items={navItems} />
        <div className='main-container mt-5'>
          <div className='row'>
            <div className='col-sm-6 col-12 goals-list'>
              <div className='goal-list-main'>
                <div className='d-flex justify-content-between'>
                  <div className='input-area'>
                    <input
                      type='text'
                      placeholder='Search'
                      onChange={filterGoalsToShow}
                    />
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      className='search-icon'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M14.2125 13.3516L10.1547 9.29375C10.7844 8.47969 11.125 7.48438 11.125 6.4375C11.125 5.18438 10.6359 4.00937 9.75156 3.12344C8.86719 2.2375 7.68906 1.75 6.4375 1.75C5.18594 1.75 4.00781 2.23906 3.12344 3.12344C2.2375 4.00781 1.75 5.18438 1.75 6.4375C1.75 7.68906 2.23906 8.86719 3.12344 9.75156C4.00781 10.6375 5.18438 11.125 6.4375 11.125C7.48438 11.125 8.47813 10.7844 9.29219 10.1562L13.35 14.2125C13.3619 14.2244 13.376 14.2338 13.3916 14.2403C13.4071 14.2467 13.4238 14.2501 13.4406 14.2501C13.4575 14.2501 13.4741 14.2467 13.4897 14.2403C13.5052 14.2338 13.5194 14.2244 13.5312 14.2125L14.2125 13.5328C14.2244 13.5209 14.2338 13.5068 14.2403 13.4912C14.2467 13.4757 14.2501 13.459 14.2501 13.4422C14.2501 13.4254 14.2467 13.4087 14.2403 13.3931C14.2338 13.3776 14.2244 13.3635 14.2125 13.3516ZM8.9125 8.9125C8.25 9.57344 7.37187 9.9375 6.4375 9.9375C5.50312 9.9375 4.625 9.57344 3.9625 8.9125C3.30156 8.25 2.9375 7.37187 2.9375 6.4375C2.9375 5.50312 3.30156 4.62344 3.9625 3.9625C4.625 3.30156 5.50312 2.9375 6.4375 2.9375C7.37187 2.9375 8.25156 3.3 8.9125 3.9625C9.57344 4.625 9.9375 5.50312 9.9375 6.4375C9.9375 7.37187 9.57344 8.25156 8.9125 8.9125Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <Link to='/user-home' className='add-goal'>
                    <svg
                      width='25'
                      height='25'
                      viewBox='0 0 25 25'
                      fill='none'
                      className='img-fluid'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.5 23.4375C9.59919 23.4375 6.8172 22.2852 4.76602 20.234C2.71484 18.1828 1.5625 15.4008 1.5625 12.5C1.5625 9.59919 2.71484 6.8172 4.76602 4.76602C6.8172 2.71484 9.59919 1.5625 12.5 1.5625C15.4008 1.5625 18.1828 2.71484 20.234 4.76602C22.2852 6.8172 23.4375 9.59919 23.4375 12.5C23.4375 15.4008 22.2852 18.1828 20.234 20.234C18.1828 22.2852 15.4008 23.4375 12.5 23.4375ZM12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25V25Z'
                        fill='white'
                      />
                      <path
                        d='M12.5 6.25C12.7072 6.25 12.9059 6.33231 13.0524 6.47882C13.1989 6.62534 13.2812 6.82405 13.2812 7.03125V11.7188H17.9688C18.176 11.7188 18.3747 11.8011 18.5212 11.9476C18.6677 12.0941 18.75 12.2928 18.75 12.5C18.75 12.7072 18.6677 12.9059 18.5212 13.0524C18.3747 13.1989 18.176 13.2812 17.9688 13.2812H13.2812V17.9688C13.2812 18.176 13.1989 18.3747 13.0524 18.5212C12.9059 18.6677 12.7072 18.75 12.5 18.75C12.2928 18.75 12.0941 18.6677 11.9476 18.5212C11.8011 18.3747 11.7188 18.176 11.7188 17.9688V13.2812H7.03125C6.82405 13.2812 6.62534 13.1989 6.47882 13.0524C6.33231 12.9059 6.25 12.7072 6.25 12.5C6.25 12.2928 6.33231 12.0941 6.47882 11.9476C6.62534 11.8011 6.82405 11.7188 7.03125 11.7188H11.7188V7.03125C11.7188 6.82405 11.8011 6.62534 11.9476 6.47882C12.0941 6.33231 12.2928 6.25 12.5 6.25V6.25Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                </div>
                <h4 className='title mt-5'>GOALS</h4>
                <hr className='mt-4' />
                <div className='goals-list-inner'>
                  {goalsToShow.map((goalObject, index) => (
                    <Goal
                      key={goalObject.id}
                      goalObject={goalObject}
                      setActiveId={setActiveId}
                      setDetailsActive={setDetailsActive}
                    />
                  ))}

                  {!goals.length && <Loading />}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-12 goal-details'>
              <GoalDetails
                active={detailsActive}
                goalObject={findGoalById(activeId)}
                setDetailsActive={setDetailsActive}
                setDeleteID={setDeleteID}
                setDeleteActive={setDeleteActive}
                editActive={editActive}
                setEditActive={setEditActive}
                fetchGoals={fetchGoals}
              />
              <DeleteGoal
                active={deleteActive}
                id={deleteID}
                setDeleteActive={setDeleteActive}
                deleteGoal={deleteGoal}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GoalPage;
