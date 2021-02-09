import "../style/profile.css";
import "../images/profileImage.jpeg";
function profile() {
	return (
		<div className="backgroundImg3">
			<img
				className="profileImg mr-5"
				src="https://scontent.famm7-1.fna.fbcdn.net/v/l/t1.0-9/142201941_10224938311387340_7064334195806258583_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFsbK4homX-Rr0_v5GTnsep-FFV3idYQ7T4UVXeJ1hDtB4marFmRT8nz6dqp1Mi-qg&_nc_ohc=Bj8qvk4OIG8AX-F7O0l&_nc_ht=scontent.famm7-1.fna&oh=5c52ffd0f78b40913ad9198fecaa92c4&oe=6048DFC7"
				type="image/jpeg"
				// className="img-fluid img-thumbnail"
				height="400px"
				width="400px"
				alt="test"
			/>
			<div className="paragraphStyle ml-5">
				<p>
					A creative and detailed individual with ability<br></br>
					to develop effective and efficient solutions with<br></br>
					zero tolerance for errors. Looking to join a <br></br>
					progressive tech company where my technical<br></br>
					skills will be fully harnessed.
				</p>
			</div>
		</div>
	);
}

export default profile;
