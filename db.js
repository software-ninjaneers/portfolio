// Import Mongoose
const mongoose = require("mongoose");
require("dotenv").config();
var DB = mongoose.connection;
// Connect to Mongoose and set connection variable

mongoose.connect(
	process.env.DB_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (!err) {
			console.log("Successfully Established Connection with MongoDB");
		} else {
			console.log(
				"Failed to Establish Connection with MongoDB with Error: " + err
			);
		}
	}
);

module.exports = DB;
