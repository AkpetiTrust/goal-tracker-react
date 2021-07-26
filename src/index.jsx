import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import UserHome from "./pages/UserHome/UserHome";
import Logout from "./pages/logout/Logout";
import GoalPage from "./pages/GoalPage/GoalPage";
import Docs from "./pages/Docs/Docs";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/user-home' exact component={UserHome} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/docs' exact component={Docs} />
        <Route path='/goals/:id?' exact component={GoalPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
