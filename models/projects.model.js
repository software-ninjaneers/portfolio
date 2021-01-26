var mongoose = require("mongoose");

// Setup schema
var projectSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	techStack: {
		type: Array(String),
		required: true,
	},
	otherTech: {
		type: Array(String),
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	challenges: {
		type: Array(String),
		required: true,
	},
	numberOfTeamMember: {
		type: Number,
		required: true,
	},
	create_date: {
		type: Date,
		default: Date.now,
	},
});
// Export Project model
var Project = (module.exports = mongoose.model("project", projectSchema));
module.exports.get = function (callback, limit) {
	Project.find(callback).limit(limit);
};
