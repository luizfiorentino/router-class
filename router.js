const { Router } = require("express");

const router = new Router();

router.get("/hi/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hi ${name} !`);
});
module.exports = router;
