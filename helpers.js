const nodemailer = require("nodemailer");

const sendEmail = (contactObject) => {
	console.log(contactObject);
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL,
			pass: process.env.PASSWORD, // naturally, replace both with your real credentials or an application-specific password
		},
	});

	const mailOptions = {
		from: "Seif.Miehiar@gmail.com",
		to: contactObject.email,
		subject: contactObject.subject,
		text: contactObject.message,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports.sendEmail = sendEmail;
