// Import express
const express = require("express");
require("dotenv").config();
var cors = require("cors");

//import Database
const DB = require("./db");
// Import routes
// Initialize the app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded());

let projectApis = require("./api-routes/projects.route");
let contactApis = require("./api-routes/contactUs.route");
let letterMe = require("./api-routes/letterMe.route");

// Use Api routes in the App
app.use("/projectsApi", projectApis);
app.use("/contactUsApi", contactApis);
app.use("/letterMeApi", letterMe);

const port = process.env.PORT || 3003;

// Send message for default URL
app.get("/", (req, res) => {
	res.send({ message: "Hello World!" });
});

// Launch app to listen to specified port
app.listen(port, () => {
	console.log(process.env.GMAIL);
	console.log(`Server listening at http://localhost:${port}`);
});
