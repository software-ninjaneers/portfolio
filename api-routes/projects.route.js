// Initialize express router
let projectApis = require("express").Router();

// Set default API response
projectApis.get("/", function (req, res) {
	res.json({
		status: "project Api Its Working",
		message: "Welcome to portfolio crafted with love!",
	});
});

// Import project controller
var projectController = require("../controllers/projects.controller");

// Contact routes
projectApis
	.route(`/projects`)
	.get(projectController.index)
	.post(projectController.new);
projectApis
	.route("/projects/:project_id")
	.get(projectController.view)
	.patch(projectController.update)
	.put(projectController.update)
	.delete(projectController.delete);

// Export API routes
module.exports = projectApis;
