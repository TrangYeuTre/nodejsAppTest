const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());
app.use(cors());

app.use("/nghia-test", (req, res, next) => {
  res.status(200).json({ message: "Chào Chí Nghĩa đẹp trai đến với app test" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Hello cổng ${process.env.PORT || 3000}`);
});
