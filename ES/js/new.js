/**
 * new
 * 创建一个空对象
 * 将空对象原型的内存地址指向构造函数的原型对象
 * 构造函数的this指向这个对象
 * 返回对象(一定是一个对象或者函数)
 */

function newOperator(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw "newOperator function the first param must be a function";
  }
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);
  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";
  return isObject || isFunction ? res : obj;
}
