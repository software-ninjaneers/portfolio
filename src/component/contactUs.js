import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "react-bootstrap/Spinner";
import "../style/contactUs.css";

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

function ContactUs() {
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("#ffffff");

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div className="backgroundImg3">
			<div className="container-sm mt-4">
				{/* <Spinner animation="border grow" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner> */}
				<center>
					<Form
						style={{ width: "20rem" }}
						className="border border-5 p-2 border border-warning rounded-3"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div>
							<Form.Group controlId="formGroupName">
								<Form.Label>Name</Form.Label>
								<div className="border border-warning">
									<Form.Control
										type="text"
										name="name"
										placeholder="Enter your name"
										ref={register({ required: true, maxLength: 20 })}
										// onChange={(e) => {
										// 	onNameChange(e);
										// }}
									/>
									<div className="" style={{ color: "red" }}>
										{errors.name && "name is required"}
									</div>
								</div>
							</Form.Group>
						</div>
						<div>
							<Form.Group controlId="formGroupSubject">
								<Form.Label>Subject</Form.Label>
								<div className="border border-warning">
									<Form.Control
										type="text"
										name="subject"
										placeholder="Subject"
										ref={register({ required: true, maxLength: 20 })}
										// onChange={(e) => {
										// 	onSubjectChange(e);
										// }}
									/>
								</div>
							</Form.Group>
						</div>
						<div>
							<Form.Group controlId="formGroupEmail">
								<Form.Label>Email address</Form.Label>
								<div className="border border-warning">
									<Form.Control
										type="email"
										name="email"
										placeholder="Enter email"
										ref={register({
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "invalid email address",
											},
										})}
										// onChange={(e) => {
										// 	onEmailChange(e);
										// }}
									/>
									<div className="" style={{ color: "red" }}>
										{errors.email && errors.email.message}
									</div>
								</div>
							</Form.Group>
						</div>
						<div>
							<Form.Group controlId="formGroupNumber">
								<Form.Label>Phone Number</Form.Label>
								<div className="border border-warning">
									<Form.Control
										type="number"
										name="Phone"
										placeholder="Enter your phone number"
										ref={register}
										// onChange={(e) => {
										// 	onPhoneChange(e);
										// }}
									/>
								</div>
							</Form.Group>
						</div>
						<div>
							<Form.Group controlId="formGroupMessage">
								<Form.Label>Message</Form.Label>
								<div className="border border-warning">
									<Form.Control
										className=""
										name="message"
										size="lg"
										type="text"
										placeholder="Deliver your message"
										ref={register}
										// onChange={(e) => {
										// 	onMessageChange(e);
										// }}
									/>
								</div>
							</Form.Group>
						</div>
						<center>
							<Button variant="primary" type="submit" value="Submit">
								Submit
							</Button>
						</center>
					</Form>
				</center>
			</div>
		</div>
	);
}

export default ContactUs;
