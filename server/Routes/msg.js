const { Router } = require("express");


const router = Router();

router.post("/", async (req, res) => {
  const { msg, grp } = req.body;
  console.log(msg,grp);
  res.send(`${msg},${grp}`)
});


module.exports = router;
