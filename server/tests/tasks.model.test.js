const { expect } = require("chai");
const { Task } = require("../features/models");
const db = require("./testdb");

describe("Task", () => {
  before(() => {
    return db.sync({ force: true });
  });

  afterEach(() => {
    return db.sync({ force: true });
  });

  describe("Task properties", () => {
    it("can have default values on the status and category properties", async () => {
      const task = await Task.create({
        name: "test task",
        description: "a test task to test the task model"
      });

      expect(task.status).to.equal("In Progress");
      expect(task.category).to.equal("General");
    });

    it("can have values on those properties that aren't the default though", async () => {
      const task = await Task.create({
        name: "Another test task",
        description: "this task doesn't have default status and category",
        status: "Completed",
        category: "Other"
      });

      expect(task.status).to.equal("Completed");
      expect(task.category).to.equal("Other");
    });

    it("cannot be assigned values beyond the scope of its enumerate", async () => {
      Task.create({
        name: "Another test task to test for",
        description: "this task's status property should be invalid",
        status: "some value not in it's enum"
      })
        .then(task => console.log("this should never run"))
        .catch(error => {
          expect(error);
        });

      Task.create({
        name: "ohohoho",
        description: "you thought this wouldn't pass",
        category: "an invalid category"
      })
        .then(task => console.log("this should never run either"))
        .catch(error => {
          expect(error);
        });
    });

    it("can have an empty description property", async () => {
      const task = await Task.create({
        name: "A very undescriptive task"
      });

      expect(task.description).to.equal("");
    });

    it("has name as a required property(it cannot be empty)", async () => {
      Task.create({ name: "" })
        .then(task => console.log("I shouldn't run"))
        .catch(error => expect(error));

      Task.create({})
        .then(task => console.log("this never runs"))
        .catch(error => expect(error));
    });
  });
});
