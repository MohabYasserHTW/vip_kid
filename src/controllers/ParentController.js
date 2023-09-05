
const ParentService = require("../services/ParentService");
const AuthService = require("../services/AuthService");

async function register(
  req,
  res,
  next
) {
  try {
    const { username, email, password } = req.body;
    const newUser = await ParentService.registerUser(username, email, password);
    const token = AuthService.createToken({
      userId: newUser._id,
      userName: newUser.username,
      userType: newUser.userType,
    });

    res.status(201).json({ newUser, token });
  } catch (err) {
    return next(err);
  }
}

async function login(req, res, next){
  try{
    const { username, email, password } = req.body;
    const parent = await ParentService.loginUser(username,password)
    const token = AuthService.createToken({
      userId: parent._id,
      userName: parent.username,
      userType: parent.userType
    })

    res.status(201).json({parent, token})
  }catch(err){
    return next(err)
  }
}

module.exports = { register, login };
