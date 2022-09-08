import React from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import StudentRoom from "../pages/StudentRoom";
import Pupil from "../pages/Pupil";

function Navbar() {

    return (
        <div>
            <Router>
                <Link to="/">
                    Home
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

                <Link to="/students">
                    Students
                </Link>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />

                    <Route exact path="/students" component={StudentRoom} />
                    <Route path="/pupil" component={Pupil} />
                </Switch>
            </Router>
        </div>
    );
};
export default Navbar;