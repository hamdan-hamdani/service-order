const express = require("express");
const route = express.Router();
const orderRouter = require("./order");

route.get("/", (req, res, next) => {
  res.json({ success: true, message: "This is api for service-order Vehicle Rental " });
});

route.use("/order", orderRouter);

route.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Wrong url service-order, please check documentation",
  });
});

module.exports = route;
