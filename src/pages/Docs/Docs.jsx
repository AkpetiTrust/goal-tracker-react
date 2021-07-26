import React from "react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "../../components/footer/Footer";
import "./docs.css";

const Docs = () => {
  return (
    <div className='docs'>
      <Hero />
      <hr />
      <Main />
      <Footer />
    </div>
  );
};

export default Docs;
