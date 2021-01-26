var mongoose = require("mongoose");

// Setup schema
var contactUsSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	create_date: {
		type: Date,
		default: Date.now,
	},
});
// Export Project model
var ContactUs = (module.exports = mongoose.model("contactUs", contactUsSchema));
module.exports.get = function (callback, limit) {
	ContactUs.find(callback).limit(limit);
};
