/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install if you have not done that already.
 */
const { Router } = require("express");
const router = Router();
const {check, getAccessToken} = require("../controllers/simcheck.controller");

router.post("/access-token", getAccessToken);
router.post("/sim-check", check);

module.exports = router;
