import React from "react";
import Nav from "../../../components/Nav/Nav";
import docs from "../../../images/docs.png";

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
    <section className='hero px-5 pb-3'>
      <Nav items={navItems} />
      <div className='row mt-3 gy-5'>
        <div className='col-sm-8 col-12'>
          <h1 className='hero-title'>DOCUMENTATION</h1>
          <p className='hero-subtitle'>(Or something like that)</p>
        </div>
        <div className='col-sm-4 col-12 center'>
          <img src={docs} className='img-fluid' alt='docs' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
