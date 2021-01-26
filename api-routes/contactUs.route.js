// Initialize express router
let contactApis = require("express").Router();

// Set default API response
contactApis.get("/", function (req, res) {
	res.json({
		status: "contact Api is Working",
		message: "Welcome to portfolio - contact us feature!",
	});
});

// Import project controller
var contactController = require("../controllers/contactUs.controller");

// Contact routes
contactApis
	.route("/contactUs")
	.get(contactController.index)
	.post(contactController.new);
contactApis
	.route("/contacts/:contact_id")
	.get(contactController.view)
	.patch(contactController.update)
	.put(contactController.update)
	.delete(contactController.delete);

// Export API routes
module.exports = contactApis;
