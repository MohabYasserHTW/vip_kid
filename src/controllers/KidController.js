

const KidService = require("../services/KidService")

async function register(req, res, next) {
  try {
    const { username, age } = req.body;
    const newUser = await KidService.registerUser(username, age);

    res.status(201).json(newUser);
  } catch (err) {
    return next(err);
  }
}

module.exports = { register };
