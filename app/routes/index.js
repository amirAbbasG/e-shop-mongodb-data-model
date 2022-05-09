const router = require("express").Router();
const HomeRoutes = require("./HomeRoutes");

router.use("/home", HomeRoutes);

module.exports = router;
