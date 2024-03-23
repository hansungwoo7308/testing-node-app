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
app.use(cors(corsSettings)); // 크로스오리진 보안정책을 설정한다.
app.use(express.json()); // 클라이언트 요청 데이터를 자바스크립트 형식으로 파싱한다.
// app.use(express.urlencoded()) // 클라이언트 요청 중에서 폼데이터를 자바스크립트 형식으로 파싱한다.

// static routes
app.use(express.static(path.join(__dirname, "../testing-app/build")));
app.get("/", (req, res) => {
  console.log("home".gray);
  res.status(200).send("<html>home page</html>").end();
});
app.get("/dashboard", (req, res) => {
  console.log("dashboard".gray);
  res.status(200).send("<html>dashboard page</html>").end();
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
