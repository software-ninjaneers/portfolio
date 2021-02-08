import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Accordion,
	Card,
	ListGroupItem,
	ListGroup,
	Button,
} from "react-bootstrap";
import "../style/projects.css";

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		function fetchData() {
			// You can await here
			axios
				.get("/projectsApi/projects")
				.then((response) => {
					// ...
					setProjects(response.data.data);
				})
				.catch((error) => {
					throw error;
				});
		}
		fetchData();
	}, [projects]); // Or [] if effect doesn't need props or state

	const iterate = (array) => {
		var string = "";
		array.forEach((element, i) => {
			i < array.length - 1 ? (string += element + " - ") : (string += element);
		});
		return string;
	};
	return (
		<div className="backgroundImg2">
			<div className="card-group">
				{projects.map((element, i) => {
					return (
						<div key={i} className="col-sm-3 mt-5 ml-5">
							<Accordion defaultActiveKey="0">
								{/* //TESTING */}
								<Card style={{ width: "20rem" }}>
									<Card.Img
										variant="top"
										src="https://cdn.wallpapersafari.com/22/13/t4Wuob.jpg"
									/>
									<Card.Body>
										<div className="card-body">
											<h5 className="card-title text-center font-weight-bold text-monospace">
												{element.title}
											</h5>
											<p className="card-text  text-right text-muted">
												<small> {element.position}</small>
											</p>
										</div>

										<Card.Text>{element.desc}</Card.Text>
									</Card.Body>
									<Card.Header>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="0"
											style={{ textDecoration: "none", color: "darkOrange" }}
										>
											<b>Technologies</b>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body>{iterate(element.techStack)}</Card.Body>
									</Accordion.Collapse>
									<Card.Header>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="1"
											style={{ textDecoration: "none", color: "darkOrange" }}
										>
											<b>Management</b>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<Card.Body>{iterate(element.otherTech)}</Card.Body>
									</Accordion.Collapse>
									<Card.Header>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="2"
											style={{ textDecoration: "none", color: "darkOrange" }}
										>
											<b>Challenges</b>
										</Accordion.Toggle>
									</Card.Header>
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

									<Card.Body>
										<Card.Link
											style={{ textDecoration: "none", color: "black" }}
											href="https://github.com/Seif-Miehiar/portfolio"
										>
											GitHub
										</Card.Link>
									</Card.Body>
								</Card>
								{/* <Accordion defaultActiveKey="0">
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
							</Accordion> */}
							</Accordion>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
