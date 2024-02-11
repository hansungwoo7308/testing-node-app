const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  // database
  const db = mongoose.connection;
  // console.log({ db });

  // sellecting the collection
  const collection = db.collection("commercial_analysis_service");
  // console.log({ collection });

  const documents = await collection.find().toArray();
  console.log({ documents });

  res.status(200).json({ documents });
});

module.exports = router;
