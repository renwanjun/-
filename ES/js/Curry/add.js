// 实现add(1)(2)(3)=6,add(1)(1,2,3)(2)=10
// function add(a, b) {
//   return a + b;
// }
const add = function () {
  let _args = Array.from(arguments);
  function fn() {
    _args.push(...arguments);
    // 返回结果
    return add.apply(null, _args);
  }
  fn.toString = function () {
    return _args.reduce((sum, cur) => sum + cur);
  };
  return fn;
};
var value = add(1)(2)(3);
console.log(value==6);
// console.log(typeof add(1)(2));
