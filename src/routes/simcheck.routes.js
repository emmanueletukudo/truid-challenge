/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install if you have not done that already.
 */
const { Router } = require("express");
const router = Router();
const SimCheckCtrl = require("../controllers/simcheck.controller");

router.get("/", SimCheckCtrl.check);

module.exports = router;
