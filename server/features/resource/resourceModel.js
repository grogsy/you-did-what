const db = require("../../db");
const Sequelize = require("sequelize");

const Resource = db.define("resource", {
  httplink: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  },
  fallbackText: {
    type: Sequelize.STRING
  }
});

Resource.beforeCreate((resource, options) => {
  if (!resource.fallbackText) {
    resource.fallbackText = resource.httplink;
  }
});

module.exports = Resource;
