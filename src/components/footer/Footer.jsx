import React from "react";
import style from "./footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${style.footer} px-5 py-4`}>
      <div className='row gy-5'>
        <div className='col-sm-6 col-12'>
          <p className={style.footer_title}>ABOUT</p>
          <p className={style.talk}>
            Goal tracker is a tool developed by{" "}
            <a
              href='https://trust-akpeti.com'
              target='_blank'
              rel='noreferrer'
              className={style.footer_link}>
              Akpeti Trust
            </a>{" "}
            to help improve productivity. It helps manage your goals and
            motivate you to achieve them.
          </p>
        </div>
        <div className='col-sm-6 col-12'>
          <p className={style.footer_title}>Follow Us</p>
          <div className={style.icons}>
            <a href='/'>
              <FaFacebook color='#fff' />
            </a>{" "}
            <a href='/'>
              <FaTwitter color='#fff' />
            </a>{" "}
            <a href='/'>
              <FaInstagram color='#fff' />
            </a>
          </div>
          <div className={style.copyright}>
            <p>Copyright &copy; 2021. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
