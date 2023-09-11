const express = require("express");
const mobileRoute = require("./mobile.route");

const router = express.Router();

router.use("/mobile", mobileRoute);

module.exports = router;
