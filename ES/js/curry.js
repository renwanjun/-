/**
 * JavaScript中柯利化的作用
 * 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
 * 1.参数复用
 * 2.提前返回
 * 3.延迟执行
 */

/**
 * 将被返回函数的参数进行排序
 * @param {*} fn 要进行柯利化的函数
 * @returns
 */
function curry(fn) {
  // 来自外部函数的参数
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  };
}

/**
 * 绑定函数
 * @param {*} fn
 * @param {*} context
 * @returns
 */
function bind(fn, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    // 返回运行结果
    return fn.apply(context, finalArgs);
  };
}

module.exports = curry;
