const express = require("express");
const app = express();
const connectDB = require("./Config/database");
const portfolioRoute = require("./Routes/portfolioRoute");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./Config/.env" });
connectDB(); // Connect to MongoDB

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use your API routes
app.use("/api", portfolioRoute);

// Serve React static files in production
const path = require("path");
if (process.env.NODE_ENV === "production") {
  // Serve static files from the "client/build" directory
  app.use(express.static(path.join(__dirname, "client/build")));

  
 
}

// Start the server
const PORT = process.env.PORT || 2424; // Use default port 2424 if not specified in .env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} better go call me!`);
});
