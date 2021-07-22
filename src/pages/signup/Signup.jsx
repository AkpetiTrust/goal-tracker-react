import React from "react";
import Main from "./components/Main";
import Footer from "../../components/footer/Footer";

const Signup = ({ history }) => {
  return (
    <div className='signup'>
      <Main history={history} />
      <Footer />
    </div>
  );
};

export default Signup;
