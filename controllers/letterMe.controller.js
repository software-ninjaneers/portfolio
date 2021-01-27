// Import letter model
LetterMe = require("../models/letterMe.model");
var { sendCover } = require("../helpers/sendCover");

// Handle index actions
exports.index = function (req, res) {
	LetterMe.get(function (err, letter) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "letter retrieved successfully",
			data: letter,
		});
	});
};

// Handle create letter actions
exports.new = function (req, res) {
	console.log(req.body);
	LetterMe.findOne({ email: req.body.email }, (err, letter) => {
		console.log("letter", letter);
		if (letter) {
			sendCover(letter);
			res.json({
				status: "letter already exists",
				message: err,
			});
		} else {
			var letter = new LetterMe();
			letter.name = req.body.name;
			letter.orgName = req.body.orgName;
			letter.email = req.body.email;
			letter.phoneNumber = req.body.phoneNumber;
			letter.feedback = req.body.feedback;

			// save the letter and check for errors
			letter.save(function (err) {
				if (err) res.json(err);
				res.json({
					email: "New letter created!",
					data: letter,
				});
			});
			sendCover(letter);
		}
	});
};

// Handle view letter info
exports.view = function (req, res) {
	LetterMe.findById(req.params.letter_id, function (err, letter) {
		if (err) res.send(err);
		res.json({
			message: "letter details loading..",
			data: letter,
		});
	});
};

// Handle update letter info
exports.update = function (req, res) {
	console.log(req.body);
	LetterMe.findById(req.params.letter_id, function (err, letter) {
		if (err) res.send(err);
		letter.email = req.body.email;
		letter.subject = req.body.subject;
		letter.message = req.body.message;
		letter.phoneNumber = req.body.phoneNumber;
		// save the letter and check for errors
		letter.save(function (err) {
			if (err) res.json(err);
			res.json({
				message: "letter Info updated",
				data: letter,
			});
		});
	});
};

// Handle delete letter
exports.delete = function (req, res) {
	LetterMe.remove(
		{
			_id: req.params.letter_id,
		},
		function (err, letter) {
			if (err) res.send(err);
			res.json({
				status: "success",
				message: "letter deleted",
			});
		}
	);
};
