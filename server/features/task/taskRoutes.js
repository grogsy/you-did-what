const router = require("express").Router();
const { Task, Resource } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: {
        userId: req.user.id
      },
      order: [["createdAt", "DESC"]]
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const tasks = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      },
      include: [{ model: Resource }]
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// router.get("/by-category/:category", async (req, res, next) => {
//   try {
//     const tasks = await Task.findAll({
//       where: { category: req.params.category },
//       order: [["createdAt", "DESC"]]
//     });
//     res.json(tasks);
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const task = await Task.create({ ...req.body, userId: req.user.id });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });
    // await Resource.destroy({ where: { taskId: task.id } });
    await task.destroy();
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });
    await task.update({ ...req.body });
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/complete/:id", async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });
    await task.update({
      status: "Completed"
      // completedAt: Sequelize.fn("NOW")
    });
    res.json(task);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
