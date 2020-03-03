const path = require("path");
const express = require("express");
const app = express();
const db = require("./db");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("passport");
const morgan = require("morgan");

const sessionStore = new SequelizeStore({ db });

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.use(morgan("dev"));

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "test secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", require("./api"));
app.use("/user", require("./features/user/userRoutes"));

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
app.get("*", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = 4000;

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`up on ${PORT}`);
  });
});
