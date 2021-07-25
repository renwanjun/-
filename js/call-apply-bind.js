/**
 * 手动实现call,apply,bind
 * this和arguments的处理
 * 注意：arguments是个类Array的Object, 用解构运算符..., 直接拿值拼接
 */
function rCall(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  // 默认上下文是window
  context = context || window;
  //Array.prototype.slice.call(arguments),1)
  const args = [...arguments].slice(1);
  // 前面讲的关键，将函数本身作为对象context的属性调用，以实现自动绑定this
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

// 模拟实现apply
function rApply(context, arr) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  // console.log(Array.prototype.slice.call(arguments))
  context = context || window;
  // 避免与原值冲突
  const fn = Symbol();
  context[fn] = this;
  let result;
  // 支持数组，类数组对象
  if (Array.isArray(arr)) {
    result = context[fn](...arr);
  } else {
    result = context[fn](arr);
  }
  delete context[fn];
  return result;
}

// 模拟实现bind
function rBind(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  const self = this;
  // 保留之前的参数，为下面的参数拼接
  const args = [...arguments].slice(1);

  return function F() {
    // 如果被new创建实例，不会被改变上下文！
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    // args.concat(...arguments): 拼接之前和现在的参数

    return self.apply(context, args.concat(...arguments));
  };
}

Object.assign(Function.prototype, {
  rCall,
  rApply,
  rBind,
});

// 以下是测试代码
// function test(arg1, arg2) {
//   console.log(arg1, arg2);
//   console.log(this.a, this.b);
// }

// test.call2({ a: "a", b: "b" }, 1, 2);
// test.apply2({ a: "a", b: "b" }, [1, 2]);
// var test2 = test.bind({ a: "a", b: "b" })
// test2(1, 2)
// let obj = {
//   initial: 10,
//   add,
// };
// function add(a, b, c) {
//   return Array.from(arguments).reduce((sum, cur) => sum + cur, this.initial);
// }

// console.log(add.rCall(obj, 1, 2));
