// Initialize express router
let letterApis = require("express").Router();

// Set default API response
letterApis.get("/", function (req, res) {
	res.json({
		status: "Letter Api is Working",
		message: "Welcome to portfolio - cover letter feature!",
	});
});

// Import project controller
var LetterMeController = require("../controllers/letterMe.controller");

// Contact routes
letterApis
	.route("/letterMe")
	.get(LetterMeController.index)
	.post(LetterMeController.new);
letterApis
	.route("/letters/:letterMe_id")
	.get(LetterMeController.view)
	.patch(LetterMeController.update)
	.put(LetterMeController.update)
	.delete(LetterMeController.delete);

// Export API routes
module.exports = letterApis;
