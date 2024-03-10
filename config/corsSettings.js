// const allowedOrigins = ["http://localhost:3000", "http://example2.com", "http://example3.com"];

const corsSettings = {
  // origin: (origin, callback) => {
  //   // console.log({ origin });
  //   // 요청이 허용된 출처인지 확인합니다.
  //   if (!origin || allowedOrigins.includes(origin)) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error("Not allowed by CORS"));
  //   }
  // },
  origin: "*",
};

module.exports = corsSettings;
