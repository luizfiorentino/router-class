const { Router } = require("express");
const { append } = require("express/lib/response");

const router = new Router();
const students = ["Dario", "Wilson", "Maurice", "Laurens", "Luiz"];

router.get("/", (req, res) => res.send(students));

module.exports = router;
