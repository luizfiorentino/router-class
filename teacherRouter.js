const { Router } = require("express");

const router = new Router();

const teachers = ["Swen", "Matias", "David", "Karla"];

router.get("/", (req, res) => res.send(teachers));

module.exports = router;
