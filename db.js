// Import Mongoose
const mongoose = require("mongoose");

var DB = mongoose.connection;
// Connect to Mongoose and set connection variable

mongoose.connect(
	"mongodb://localhost:27017/testingDB",
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
