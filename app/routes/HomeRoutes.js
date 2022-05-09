const router = require("express").Router();
const HomeController = require("../http/controllers/HomeController");

router.get("/find", HomeController.find);

module.exports = router;
