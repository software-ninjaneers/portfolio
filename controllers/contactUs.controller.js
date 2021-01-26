// Import contact model
ContactUs = require("../models/contactUs.model");

// Handle index actions
exports.index = function (req, res) {
	ContactUs.get(function (err, contact) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "contact retrieved successfully",
			data: contact,
		});
	});
};

// Handle create contact actions
exports.new = function (req, res) {
	// console.log(req.body);
	ContactUs.findOne({ email: req.body.email }, (err, email) => {
		console.log("email", email);
		if (email) {
			res.json({
				status: "email already exists",
				message: err,
			});
		} else {
			var contact = new ContactUs();
			contact.email = req.body.email;
			contact.subject = req.body.subject;
			contact.message = req.body.message;
			contact.phoneNumber = req.body.phoneNumber;
			// save the contact and check for errors
			contact.save(function (err) {
				if (err) res.json(err);
				res.json({
					message: "New contact created!",
					data: contact,
				});
			});
		}
	});
};

// Handle view contact info
exports.view = function (req, res) {
	ContactUs.findById(req.params.contact_id, function (err, contact) {
		if (err) res.send(err);
		res.json({
			message: "contact details loading..",
			data: contact,
		});
	});
};

// Handle update contact info
exports.update = function (req, res) {
	console.log(req.body);
	ContactUs.findById(req.params.contact_id, function (err, contact) {
		if (err) res.send(err);
		contact.email = req.body.email;
		contact.subject = req.body.subject;
		contact.message = req.body.message;
		contact.phoneNumber = req.body.phoneNumber;
		// save the contact and check for errors
		contact.save(function (err) {
			if (err) res.json(err);
			res.json({
				message: "contact Info updated",
				data: contact,
			});
		});
	});
};

// Handle delete contact
exports.delete = function (req, res) {
	ContactUs.remove(
		{
			_id: req.params.contact_id,
		},
		function (err, contact) {
			if (err) res.send(err);
			res.json({
				status: "success",
				message: "contact deleted",
			});
		}
	);
};
