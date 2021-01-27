var mongoose = require("mongoose");

// Setup schema
var letterMeSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	orgName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	feedback: {
		type: String,
		required: true,
	},
	create_date: {
		type: Date,
		default: Date.now,
	},
});
// Export Project model
var letterMe = (module.exports = mongoose.model("letterMe", letterMeSchema));
module.exports.get = function (callback, limit) {
	letterMe.find(callback).limit(limit);
};
