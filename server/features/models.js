// make associations here?
const Task = require("./task/taskModel");
const Resource = require("./resource/resourceModel");

// adds taskId to Resource
Task.hasMany(Resource, { onDelete: "cascade" });
// enables eager loading
Resource.belongsTo(Task);

module.exports = {
  Task,
  Resource
};
