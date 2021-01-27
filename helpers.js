const nodemailer = require("nodemailer");

export default sendEmail = (object) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL,
			pass: process.env.PASSWORD, // naturally, replace both with your real credentials or an application-specific password
		},
	});

	const mailOptions = {
		from: "Seif.Miehiar@gmail.com",
		to: "bazadough1997@gmail.com",
		subject: "Testing subject",
		text: "First text of the first test of nodemailer.",
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};
