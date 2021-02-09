import { Navbar, Nav } from "react-bootstrap";
// import LandingPage from "./landingPage";
// import ContactUs from "./contactUs";
// import logo from "../images/SeifMiehiarLogo.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavbarLandingPage() {
	return (
		<Router>
			<Navbar
				sticky="top"
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				// className="navbar navbar-expand-lg navbar-light fixed-top py-3"
				// id="mainNav"
			>
				<div className="container">
					<Link
						to="/"
						className="navbar-brand js-scroll-trigger"
						href="#page-top"
					>
						Software Ninjaneer
					</Link>
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					{/* <div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto my-2 my-lg-0">
								<li className="nav-item">
									<Link to="/" className="nav-link js-scroll-trigger">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/portfolio"
										className="nav-link js-scroll-trigger"
										href="#services"
									>
										portfolio
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/projects"
										className="nav-link js-scroll-trigger"
										href="#portfolio"
									>
										projects
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/contact"
										className="nav-link js-scroll-trigger"
										href="#contact"
									>
										Contact
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/resume"
										className="nav-link js-scroll-trigger"
										href="#contact"
									>
										Resume
									</Link>
								</li>
							</ul>
					</div> */}
				</div>
			</Navbar>
			{/* <div>
				<div>
					<Navbar
						sticky="top"
						collapseOnSelect
						expand="lg"
						bg="dark"
						variant="dark"
					>
						<Link to="/">
							<Navbar.Brand path="/">
								<img
									alt=""
									src={logo}
									width="325"
									height="75"
									className="d-inline-block align-top"
								/>
							</Navbar.Brand>
						</Link>
						<Nav className="mr-auto">
							<Link to="/" style={{ textDecoration: "none" }}>
								Home
							</Link>
							<Link to="/contact" style={{ textDecoration: "none" }}>
								contact
							</Link>
						</Nav>
					</Navbar>
				</div>
			</div> */}
			{/* <div>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path="/contact">
						<ContactUs />
					</Route>
				</Switch>
			</div> */}
		</Router>
	);
}

export default NavbarLandingPage;
