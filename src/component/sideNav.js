import LandingPage from "./landingPage";
import ContactUs from "./contactUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "../style/sideNav.css";

function SideNav() {
	return (
		<Router>
			<div>
				<div id="mySidenav" className="sidenav">
					<Link to="/" id="about">
						Home
					</Link>
					<Link to="/portfolio" id="blog">
						Portfolio
					</Link>
					<Link to="/projects" id="projects">
						Projects
					</Link>
					<Link to="/contact" id="contact">
						Contact
					</Link>
				</div>
			</div>
			<div>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path="/contact">
						<ContactUs />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default SideNav;
