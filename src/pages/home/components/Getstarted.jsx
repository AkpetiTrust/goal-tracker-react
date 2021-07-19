import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/get_started.png";

const Getstarted = () => {
  return (
    <section className='get-started px-5 pb-5'>
      <div className='row m-0 gy-5'>
        <div className='col-sm-8 col-12'>
          <p className='title'>SIGN UP TO GET STARTED</p>
          <p className='talk'>
            Get started immediately, just create an account and use it online,
            or if you prefer the mobile app, you could download it{" "}
            <Link to='/download'>here</Link>.
          </p>
        </div>
        <div className='col-sm-4 col-12'>
          <img src={image} alt='Get started' className='img-fluid' />
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
