const { Router } = require("express");
const messageSchema = require("../Models/messageSchema");

const router = Router();

router.post("/addMsg", async (req, res) => {
  const { msg, grp, from } = req.body;
  console.log(msg, grp, from);
  const data = await messageSchema.create({
    message: { text: msg },
    group: grp,
    sender: from,
  });
  console.log(data);
});

router.post("/readMsg", async (req, res) => {
  try {
    const { grp } = req.body;
    const messages = await messageSchema
      .find({ group: { $all: grp } })
      .sort({ updatedAt: 1 });
    const projectedMsg = messages.map((msg) => {
      return {
        sender: msg.sender,
        content: msg.message.text,
      };
    });
    res.send(projectedMsg);
  } catch {}
});

module.exports = router;
