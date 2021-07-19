import React from "react";
import Preloader from "../../components/preloader/Preloader";
import Main from "./components/Main";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className='home'>
      <Preloader />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
