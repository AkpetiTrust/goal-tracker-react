import React from "react";
import Preloader from "../../components/preloader/Preloader";
import Main from "./components/Main";

const Home = () => {
  return (
    <div className='home'>
      <Preloader />
      <Main />
    </div>
  );
};

export default Home;
