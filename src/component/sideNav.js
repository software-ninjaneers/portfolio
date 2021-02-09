import LandingPage from "./landingPage";
import ContactUs from "./contactUs";
import Profile from "./profile";
import Projects from "./projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "../style/sideNav.css";

function SideNav() {
	return (
		<Router>
			<div>
				<div id="mySidenav" className="sidenav">
					<Link to="/" id="about">
						<img
							alt="Home"
							src="https://img.icons8.com/metro/30/000000/home.png"
						/>
					</Link>
					<Link to="/portfolio" id="blog">
						<img
							alt="Profile"
							src="https://img.icons8.com/ios-glyphs/30/000000/test-account.png"
						/>
					</Link>
					<Link to="/projects" id="projects">
						<img
							alt="Projects"
							src="https://img.icons8.com/ios-filled/30/000000/group-of-projects.png"
						/>{" "}
					</Link>
					<Link to="/contact" id="contact">
						<img
							alt="Contact"
							src="https://img.icons8.com/ios-filled/30/000000/business-contact.png"
						/>
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
					<Route path="/portfolio">
						<Profile />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default SideNav;
