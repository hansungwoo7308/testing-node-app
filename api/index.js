// importing modules
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 7000;
const colors = require("colors");

// app.use(cors({ origin: "http://localhost:7000" })); // allowing cross origin

// static
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/dashboard", (req, res) => {
  console.log("some".gray);
  res.status(200).send("<html>ssdfsdfkshdfl</html>");
});

// dynamic
app.get("/api/some", (req, res) => {
  console.log("some".gray);
  res.status(200).json({ message: "some..." });
});

// running
app.listen(PORT, () => console.log("[running on port 7000]".green, "\n"));
