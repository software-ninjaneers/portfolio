import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../style/contactUs.css";

function ContactUs() {
	const { register, handleSubmit, errors, reset } = useForm();

	function sendData(data) {
		console.log(data);
		// You can await here
		axios
			.post("/contactUsApi/contactUs", data)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		reset({});
	}

	const onSubmit = (data) => {
		console.log(data);
		sendData(data);
	};

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
								<div className="border border-warning rounded-3 ">
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
								<div className="border border-warning rounded-3">
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
								<div className="border border-warning rounded-3">
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
								<div className="border border-warning rounded-3">
									<Form.Control
										type="number"
										name="phoneNumber"
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
								<div className="border border-warning rounded-3 ">
									<Form.Control
										className=" "
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
