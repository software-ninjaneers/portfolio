import React, { useState, useEffect } from "react";

function ProjectDesc(props) {
	const [data, setData] = useState(props.data);
	// console.log(data);
	console.log(data);
	return (
		<div>
			{/* <!-- Button trigger modal --> */}
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModalCenter"
			>
				Launch demo modal
			</button>
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="exampleModalCenter"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">
								{props.data.title}
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">{props.data.desc}</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDesc;
