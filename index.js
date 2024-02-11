// importing modules
const express = require("express");
const app = express();
//
const dotenv = require("dotenv");
const path = require("path");
const colors = require("colors");
const PORT = process.env.PORT || 7000;
//
const connectDB = require("./config/connectDB");
const cors = require("cors");
const corsSettings = require("./config/corsSettings");

// setting the environment
dotenv.config();

// connecting the database
connectDB();

// middlewares
app.use(cors(corsSettings));
app.use(express.json());

// static routes
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/dashboard", (req, res) => {
  console.log("some".gray);
  res.status(200).send("<html>ssdfsdfkshdfl</html>");
});

// dynamic routes
app.use("/api/public_data", require("./routes/api/public_data"));
// app.use("/api/test", (req, res) => {
//   res.status(200).json({ somesome: "234234234" });
// });

// running the server
app.listen(PORT, () => console.log("[running on port 7000]".green, "\n\n\n"));

// vercel.json
// {
//   "version": 2,
//   "builds": [{ "src": "index.js", "use": "@vercel/node" }],
//   "routes": [{ "src": "/api/(.*)", "dest": "/index.js" }]
// }
