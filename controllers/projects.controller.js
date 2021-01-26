// Import contact model
Project = require("../models/projects.model");

// Handle index actions
exports.index = function (req, res) {
	Project.get(function (err, projects) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "projects retrieved successfully",
			data: projects,
		});
	});
};

// Handle create project actions
exports.new = function (req, res) {
	console.log(req.body);
	var project = new Project();
	project.title = req.body.title;
	project.position = req.body.position;
	project.desc = req.body.desc;
	project.techStack = req.body.techStack;
	project.otherTech = req.body.otherTech;
	project.time = req.body.time;
	project.challenges = req.body.challenges;
	project.numberOfTeamMember = req.body.numberOfTeamMember;
	// save the project and check for errors
	project.save(function (err) {
		if (err) res.json(err);
		res.json({
			message: "New project created!",
			data: project,
		});
	});
};

// Handle view Project info
exports.view = function (req, res) {
	Project.findById(req.params.project_id, function (err, project) {
		if (err) res.send(err);
		res.json({
			message: "project details loading..",
			data: project,
		});
	});
};

// Handle update project info
exports.update = function (req, res) {
	console.log(req.body);
	Project.findById(req.params.project_id, function (err, project) {
		if (err) res.send(err);
		project.title = req.body.title;
		project.position = req.body.position;
		project.desc = req.body.desc;
		project.techStack = req.body.techStack;
		project.otherTech = req.body.otherTech;
		project.time = req.body.time;
		project.challenges = req.body.challenges;
		project.numberOfTeamMember = req.body.numberOfTeamMember;
		// save the project and check for errors
		project.save(function (err) {
			if (err) res.json(err);
			res.json({
				message: "project Info updated",
				data: project,
			});
		});
	});
};

// Handle delete project
exports.delete = function (req, res) {
	Project.remove(
		{
			_id: req.params.project_id,
		},
		function (err, project) {
			if (err) res.send(err);
			res.json({
				status: "success",
				message: "project deleted",
			});
		}
	);
};
