const router = require("express").Router();
const { Resource } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.findAll({
      order: [["createdAt", "DESC"]]
    });
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

router.get("/by-task-id/:taskId", async (req, res, next) => {
  try {
    const resources = await Resource.findAll({
      where: {
        taskId: req.params.taskId
      }
    });
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await Resource.create({ ...req.body });
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    resource.destroy();
    res.json(resource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
