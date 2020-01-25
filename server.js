// Loading express framework and body-parser helper.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Creating instance of express to serve end points.
const app = express();

// File system helper that will be used to serve JSON files.
const fs = require("fs");

// Configuring express instance with some body-parser settings, to handle JSON data.
// Cors is used to open cross http calls.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./data/public/"));

// To handle the routes.
const routes = require("./routes/routes.js")(app, fs);

// To launch the server on port 3000.
const server = app.listen(3000, () => {
  console.log("listening on port %s...", server.address().port);
});
