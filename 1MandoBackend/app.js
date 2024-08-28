// fileName : server.js
// Example using the http module
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();
const groupRoutes = require("./routes/groupRoutes");
// Create an HTTP server
const app = express();
app.use(bodyParser.json());

const dbURI = process.env.MONGODB_URI;
console.log(dbURI);

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use("/api", groupRoutes);
//  domain/api/newGroups
// Specify the port to listen on
const port = 3000;
// Start the server
app.listen(port, () => {
  console.log(`Node.js HTTP  is running on port ${port}`);
});
