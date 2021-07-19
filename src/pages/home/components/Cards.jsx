import React from "react";
import card1 from "../../../images/card_1.png";
import card2 from "../../../images/card_2.png";
import card3 from "../../../images/card_3.png";

const Cards = () => {
  return (
    <section className='cards-section py-4 px-1'>
      <div className='row g-5 m-0'>
        <div className='col-sm-4 col-12 text-center'>
          <div className='img'>
            <img className='img-fluid' src={card1} alt='Productivity' />
          </div>
          <p>Improve productivity</p>
        </div>
        <div className='col-sm-4 col-12 text-center'>
          <div className='img'>
            <img className='img-fluid' src={card2} alt='steps' />
          </div>
          <p>Break goals into steps</p>
        </div>
        <div className='col-sm-4 col-12 text-center'>
          <div className='img'>
            <img className='img-fluid' src={card3} alt='deadlines' />
          </div>
          <p>Set deadlines</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
