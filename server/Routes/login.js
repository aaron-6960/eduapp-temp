const { Router } = require("express");
const User = require("../Models/User");

const router = Router();

router.post("/login", async (req, res) => {
  const { user } = req.body;
  if (!user) {
    return res.status(400).send("Enter Username");
  }
  const userDB = await User.findOne({ user: user });
  if (!userDB) return res.status(401).send("User not found");
  else return res.status(200).json(userDB);
});

router.post("/signup", async (req, res) => {
  const { user } = req.body;
  if (!user) {
    return res.status(400).send("Enter Username");
  }
  const userDB = await User.findOne({ user: user});
  if (userDB) return res.status(401).send("User already exists");
  else {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
});
module.exports = router;
