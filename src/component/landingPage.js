import { Carousel } from "react-bootstrap";
// import SideNav from "./sideNav";
import "../style/landingPage.css";
function LandingPage() {
	return (
		<div>
			<div className="backgroundImg">
				{/* <img
					className="d-block w-100"
					src="https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress/2019/07/sb-blog-programming.png"
				/> */}
			</div>
			<Carousel.Caption>
				<h1 style={{ color: "orange", fontWeight: "bolder" }}>Seif Miehiar</h1>
				<h4 style={{ color: "orange", fontWeight: "bolder" }}>
					I'm a Full Stack Software Ninjaneer
				</h4>
			</Carousel.Caption>
		</div>
	);
}

export default LandingPage;
