class PrimitiveString {
  static [Symbol.hasInstance](x) {
    return typeof x === "string";
  }
}
// 可用于判断原始（基础）数据类型
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === "number";
  }
}
console.log(111 instanceof PrimitiveNumber); // true

// 手动实现instanceof
function rInstanceof(instance, constructor) {
  if (typeof instance !== "object" || instance == null) return false;
  if (constructor == null || typeof constructor !== "function") {
    throw new Error("检测类型错误");
  }
  // const proto = constructor.prototype;
  let proto = Object.getPrototypeOf(instance);
  let compare = false;
  while (!compare) {
    // 查到尽头还没有
    if (proto == null) return false;
    compare = constructor.prototype === proto ? true : false;
    proto = Object.getPrototypeOf(proto);
  }
  return compare;
}

module.exports = rInstanceof;
/**
 * 测试代码
 */
// function Test() {
//   this.name = "hellp";
// }
class Test {
  constructor() {
    this.name = "help";
  }
}
console.log(typeof Test);
let test = new Test();
console.log(rInstanceof(test, Test));
console.log(rInstanceof(test, Object)); // output: true
console.log(rInstanceof([], Array)); // output: true
console.log(test);
