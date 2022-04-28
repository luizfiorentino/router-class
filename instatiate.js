const express = require("express");
const { Router } = express;
const PORT = 4000;

const router = new Router();
//module.exports = router;
router.get("/hi/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hi ${name} !`);
});

const app = express();
app.use(router);
app.listen(PORT, () => console.log(`Listening on port:`, PORT));
