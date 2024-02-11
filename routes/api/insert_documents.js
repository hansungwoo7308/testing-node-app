const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  // 서버에 임시로 저장된 데이터를 가져온다.
  const { DATA: documents } = require("../../data/commercial_analysis_service.json");
  // console.log({ documents });

  // 컬렉션을 선택하고
  const collection = mongoose.connection.collection("commercial_analysis_service");
  // console.log({ collection });

  // 다큐먼트를 삽입한다.
  const result = await collection.insertMany(documents);
  console.log({ result });

  res.status(200).json({ result });
});

module.exports = router;
