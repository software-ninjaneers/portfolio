// Import express
const express = require("express");

//import Database
const DB = require("./db");
// Import routes
let projectApis = require("./api-routes/projects.route");
// Initialize the app
const app = express();

// Use Api routes in the App
app.use("/projectsApi", projectApis);

const port = process.env.PORT || 3001;

// Import Body parser
var bodyParser = require("body-parser");
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
// app.use(bodyParser.urlencoded({ extended: false }));
// Configure bodyparser to handle post requests
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());

// Send message for default URL
app.get("/", (req, res) => {
	res.json({ message: "Hello World!" });
});

// Launch app to listen to specified port
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
