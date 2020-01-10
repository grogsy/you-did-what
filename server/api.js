const router = require("express").Router();
const TaskRoute = require("./features/task/taskRoutes");
const ResourceRoute = require("./features/resource/resourceRoutes");

router.use("/tasks", TaskRoute);
router.use("/links", ResourceRoute);

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
