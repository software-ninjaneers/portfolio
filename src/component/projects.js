import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, Card } from "react-bootstrap";
import "../style/projects.css";

function Projects() {
	const [projects, setProjects] = useState([]);
	useEffect(async () => {
		try {
			let response = await axios.get(`/projectsApi/projects`);
			let data = await response.data.data;
			// let newState = data.map((e) => e); // map your state here
			setProjects(data); // and then update the state
			console.log(data);
		} catch (error) {
			console.error(error.message);
		}
	}, []);

	// useEffect(() => {
	// 	axios
	// 		.get(`/projectsApi/projects`)
	// 		.then((response) => {
	// 			// console.log(response);
	// 			if (response) setProjects(response.data.data);
	// 			console.log(projects);
	// 		})
	// 		.catch((err) => console.log(err));
	// });

	// useEffect(() => {
	// 	axios
	// 		.get("/projectsApi/projects")
	// 		.then((response) => setProjects(response.data.data))
	// 		.catch((err) => {
	// 			if (err) throw err;
	// 		});
	// }, []);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		// You can await here
	// 		const response = await axios.get("/projectsApi/projects").then;
	// 		console.log(response.data.data);
	// 		// ...
	// 		setProjects(response.data.data);
	// 	}
	// 	fetchData();
	// }); // Or [] if effect doesn't need props or state

	const iterate = (array) => {
		var string = "";
		array.forEach((element, i) => {
			i < array.length - 1 ? (string += element + " - ") : (string += element);
		});
		return string;
	};
	return projects.length > 0 ? (
		<div className="backgroundImg2">
			<div className="card-group">
				{projects.map((element, i) => {
					return (
						<div key={i} className="col-sm-3 mt-5">
							<Accordion defaultActiveKey="0">
								<div
									className="card border-3 border-color #ff8c00 mb-3 "
									style={{
										maxWidth: "20rem",
										maxHeight: "100%",
										borderColor: "#ff8c00",
									}}
								>
									<div className="card-body">
										<h5 className="card-title text-center font-weight-bold text-monospace">
											{element.title}
										</h5>
										<p className="card-text  text-right text-muted">
											{" "}
											{element.position}
										</p>
									</div>
									<ul className="list-group list-group-flush border-color #ff8c00 ">
										<li className="list-group-item border-color #ff8c00 text-center ">
											{element.desc}
										</li>

										<li
											className="list-group-item border-color #ff8c00 text-center "
											style={{ border: "inherit" }}
										>
											<Accordion.Toggle as={Card.Header} eventKey="0">
												Technologies
											</Accordion.Toggle>
											<Accordion.Collapse eventKey="0">
												<Card.Body> {iterate(element.techStack)}</Card.Body>
											</Accordion.Collapse>
										</li>
										<li
											className="list-group-item border-color text-center"
											style={{ border: "inherit" }}
										>
											<Accordion.Toggle as={Card.Header} eventKey="1">
												Management
											</Accordion.Toggle>
											<Accordion.Collapse eventKey="1">
												<Card.Body>{iterate(element.otherTech)}</Card.Body>
											</Accordion.Collapse>
										</li>
										<li className="list-group-item text-center">
											<ul className="list-inline ">
												<Accordion.Toggle as={Card.Header} eventKey="2">
													Challenges
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														{element.challenges.map((el, j) => {
															return (
																<li
																	key={j}
																	className="list-inline-item  border-color text-left"
																	style={{ border: "inherit" }}
																>
																	-{el}.
																</li>
															);
														})}
													</Card.Body>
												</Accordion.Collapse>
											</ul>
										</li>
									</ul>
								</div>
							</Accordion>
						</div>
					);
				})}
			</div>
		</div>
	) : (
		<div className="backgroundImg2 text-center font-weight-bold text-warning">
			<h2> No projects to render yet</h2>
		</div>
	);
}

export default Projects;
