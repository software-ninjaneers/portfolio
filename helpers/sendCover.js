const nodemailer = require("nodemailer");

const sendCover = (letterObject) => {
	console.log(letterObject);
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL,
			pass: process.env.PASSWORD, // naturally, replace both with your real credentials or an application-specific password
		},
	});

	const mailOptions = {
		attachments: [
			{
				filename: "resume.pdf",
				path: "/home/shark/Downloads/resume.pdf",
				contentType: "application/pdf",
			},
		],
		from: "Seif.Miehiar@gmail.com",
		to: letterObject.email,
		subject: "TEST SUBJECT",
		text: "test text",
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports.sendCover = sendCover;
