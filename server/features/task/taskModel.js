const db = require("../../db");
const Sequelize = require("sequelize");

const Task = db.define("task", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.ENUM("In Progress", "Completed", "Discarded"),
    defaultValue: "In Progress",
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ""
  },
  category: {
    type: Sequelize.ENUM(
      "General",
      "Life",
      "Leisure",
      "Career",
      "Education",
      "Other"
    ),
    defaultValue: "General",
    allowNull: false
  }
});

Task.beforeCreate((task, options) => {
  if (task.description && task.description.length > 20) {
    task.shortDesc = task.description.slice(0, 20) + "...";
  } else {
    task.shortDesc = task.description;
  }
});

module.exports = Task;
