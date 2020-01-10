const { expect } = require("chai");
const { Resource } = require("../features/models");
const db = require("./testdb");

describe("Resource", () => {
  before(() => {
    return db.sync({ force: true });
  });

  afterEach(() => {
    return db.sync({ force: true });
  });

  describe("Resource properties", () => {
    it("can only have valid urls on the httplink field", async () => {
      const resource = await Resource.create({
        httplink: "https://example.com"
      });

      expect(resource.httplink).to.equal("https://example.com");

      Resource.create({ httplink: "not a valid link" })
        .then(r => console.log("this shouldn't run"))
        .catch(error => expect(error));
    });

    it("will display the literal link if no fallback text is specified", async () => {
      const resource = await Resource.create({
        httplink: "https://example.com"
      });

      expect(resource.fallbackText).to.equal(resource.httplink);
    });

    it("will display the fall back text if it is specified", async () => {
      const resource = await Resource.create({
        httplink: "https://example.com",
        fallbackText: "This is a link to example.com"
      });

      expect(resource.fallbackText).to.equal("This is a link to example.com");
    });
  });
});
