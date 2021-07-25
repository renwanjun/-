// 实现add(1)(2)(3)=6,add(1)(1,2,3)(2)=0
// function add(a, b) {
//   return a + b;
// }

function curry() {}
const add = function () {
  const _args = Array.from(arguments);
  function fn() {
    _args.push(...arguments);
    return fn;
  }
  //   fn.toString = function () {
  //     return _args.reduce((sum, cur) => sum + cur);
  //   };
  //   fn.valueOf = function () {
  //     return _args.reduce((sum, cur) => sum + cur);
  //   };
  return fn;
};

const multiAdd = function () {
  const _args = Array.from(arguments);
  function fn() {
    _args.push(...arguments);
    return multiAdd.apply(null, _args);
  }
  fn.toString = function () {
    return _args.reduce((sum, cur) => sum + cur);
  };
  //   fn.valueOf = function () {
  //     return _args.reduce((sum, cur) => sum + cur);
  //   };
  return fn;
};
var value = multiAdd(1)(2)(3);
console.log(value);
// console.log(typeof multiAdd(1)(2));
