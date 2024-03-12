// const express = require("express");
// const router = express.Router();

// router.get("/", async (req, res) => {
//   // sellecting the collection
//   const collection = require("mongoose").connection.collection("commercial_analysis_service");

//   try {
//     const documents = await collection.find().toArray();
//     res.status(200).json({ documents });
//   } catch (error) {
//     res.status(500).json({ message: "연결에러..." });
//   }
//   // collection.find() 는 커서를 리턴한다. 커서는 포인터다. 유의미한 데이터를 갖기 위해서는 배열로 캐스팅한다.
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const documents = await mongoose.connection
      .collection("commercial_analysis_service")
      .find()
      .toArray();
    res.status(200).json({ documents });
  } catch (error) {
    res.status(500).json({ message: "연결에러..." });
  }
});

module.exports = router;
