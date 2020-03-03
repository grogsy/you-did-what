// make associations here?
const Task = require("./task/taskModel");
const Resource = require("./resource/resourceModel");
const User = require("./user/userModel");

// adds taskId to Resource
Task.hasMany(Resource, { onDelete: "cascade" });
// enables eager loading
Resource.belongsTo(Task);

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  Task,
  Resource,
  User
};
