import React from "react";
import Nav from "./Nav/Nav";
import heroImage from "../../../images/hero_image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const navItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
    {
      name: "SIGN UP",
      path: "/signup",
    },
  ];

  return (
    <section className='hero px-5 pb-5'>
      <Nav items={navItems} />
      <div className='row talk gy-5'>
        <div className='col-sm-6 col-12'>
          <h4 className='subtitle'>GOAL TRACKER</h4>
          <h1 className='title mt-4'>MANAGE YOUR GOALS EFFECTIVELY</h1>
          <Link to='/signup' className='mt-4 action-btn'>
            GET STARTED NOW
          </Link>
        </div>
        <div className='col-sm-6 col-12'>
          <img src={heroImage} alt='goals' className='img-fluid' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
