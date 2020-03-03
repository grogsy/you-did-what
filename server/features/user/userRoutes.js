const router = require("express").Router();
const { User } = require("../models");

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    });
    if (!user || !user.correctPassword(req.body.password)) {
      res.status(401).json({ status: 401, reason: "Incorrect Email/Password" });
    } else {
      req.login(user, err =>
        err
          ? next(err)
          : res.json({
              id: user.id,
              email: user.email
            })
      );
    }
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.create({ ...req.body });
    req.login(user, err =>
      err ? next(err) : res.json({ id: user.id, email: user.email })
    );
  } catch (error) {
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  try {
    req.logout();
    req.session.destroy();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.get("/me", async (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
