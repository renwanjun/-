should = require("should");
require("../call-apply-bind");
// const { rCall } = require("../call-apply-bind");
describe("模拟实现Array的call,bind,apply方法", () => {
  let obj = {
    initial: 10,
    add,
  };
  function add(a, b, c) {
    return Array.from(arguments).reduce((sum, cur) => sum + cur, this.initial);
  }
  describe("#rCall", () => {
    it("should return 13", () => {
      add.rCall(obj, 1, 2).should.eql(13);
    });
  });
  describe("#rBind", () => {
    it("should 15", function () {
      add.rApply(obj, [1, 4]).should.eql(15);
    });
  });
  describe("#rApply", () => {
    it("should return 16", function () {
      add.rBind(obj, 1, 2)(3).should.eql(16);
    });
  });
});
