import { React, useEffect } from "react";

const Logout = ({ history }) => {
  useEffect(() => {
    localStorage.removeItem("access_token");
    history.push("/");
  });
  return <div></div>;
};

export default Logout;
