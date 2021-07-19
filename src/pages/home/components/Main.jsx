import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Getstarted from "./Getstarted";

const Main = () => {
  return (
    <main className='home-main'>
      <Hero />
      <Cards />
      <Getstarted />
    </main>
  );
};

export default Main;
