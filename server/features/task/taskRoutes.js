const router = require("express").Router();
const { Task, Resource } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      order: [["createdAt", "DESC"]]
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const tasks = await Task.findByPk(req.params.id, {
      include: [{ model: Resource }]
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/by-category/:category", async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: { category: req.params.category },
      order: [["createdAt", "DESC"]]
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const task = await Task.create({ ...req.body });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    // await Resource.destroy({ where: { taskId: task.id } });
    await task.destroy();
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    await task.update({ ...req.body });
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/complete/:id/", async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    // task.status = "Completed";
    // task.completedAt = Sequelize.fn("now", task.updatedAt);
    // await task.save();
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
