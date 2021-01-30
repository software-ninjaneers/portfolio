import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/projects.css";
import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
// import { ListGroup, ListGroupItem } from "react-bootstrap/";

function Projects() {
	const [projects, setProjects] = useState({ data: [] });

	useEffect(async () => {
		const result = await axios.get(
			"http://localhost:3003/projectsApi/projects"
		);

		setProjects(result.data.data);
	});
	const iterate = (array) => {
		var string = "";
		array.forEach((element, i) => {
			i < array.length - 1 ? (string += element + " - ") : (string += element);
		});
		return string;
	};
	return projects.length > 0 ? (
		<div>
			<div className="card-group">
				{projects.map((element, i) => {
					return (
						<div key={i} className="col-sm-3 mt-5">
							<div
								className="card border-3 border-color #ff8c00 mb-3 "
								style={{
									maxWidth: "20rem",
									maxHeight: "100%",
									borderColor: "#ff8c00",
								}}
							>
								<div className="card-body bg-white">
									<h5 className="card-title bg-white">{element.title}</h5>
									<p className="card-text bg-white text-right text-muted">
										{" "}
										{element.position}{" "}
									</p>
								</div>
								<ul className="list-group list-group-flush border-color #ff8c00">
									<li className="list-group-item border-color #ff8c00 ">
										{element.desc}
									</li>
									<li
										className="list-group-item border-color #ff8c00 "
										style={{ border: "inherit" }}
									>
										{iterate(element.techStack)}
									</li>
									<li
										className="list-group-item border-color"
										style={{ border: "inherit" }}
									>
										{iterate(element.otherTech)}
									</li>
									<li className="list-group-item bg-white">
										<ul className="list-inline bg-white">
											{element.challenges.map((el, j) => {
												return (
													<li
														key={j}
														className="list-inline-item bg-white border-color"
														style={{ border: "inherit" }}
													>
														-{el}.
													</li>
												);
											})}
										</ul>
									</li>
								</ul>
								{/* <ProjectDesc key={i} data={element} /> */}
								<div className="card-footer">
									<small className="text-muted bg-white">
										Last updated 3 mins ago
									</small>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	) : (
		<h1> No projects</h1>
	);
}

export default Projects;
