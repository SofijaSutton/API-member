const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// static file-serving middleware
app.use(express.static('public'));

//home page
app.use("/api", require("./api/api"));


app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke! Route does not exist.");
});

app.use("*", function (req, res, next) {
	res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

const init = async () => {
	try {
		//  await db.sync();
		app.listen(3000, () => {
			console.log("Server is listening on port 3000!");
		});
	} catch (err) {
		console.error(err);
	}
};

init();

module.exports = app;
