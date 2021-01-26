// Initialize express router
let projectApis = require("express").Router();
// Set default API response
projectApis.get("/", function (req, res) {
	res.json({
		status: "project Api Its Working",
		message: "Welcome to portfolio crafted with love!",
	});
});
// Export API routes
module.exports = projectApis;
