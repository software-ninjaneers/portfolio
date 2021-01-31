// Import Mongoose
const mongoose = require("mongoose");
require("dotenv").config();
var DB = mongoose.connection;
// Connect to Mongoose and set connection variable

mongoose.connect(
	`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@seif-miehiar-portfolio.cizm7.mongodb.net/${process.env.MONGODB}?retryWrites=true&w=majority`,
	// `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@seif-miehiar-portfolio.cizm7.mongodb.net/${process.env.MONGODB}`,
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
