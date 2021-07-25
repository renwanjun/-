// typeof instanceof 首先判断是基本类型还是引用类型
Object.prototype.toString2 = function () {
  //   console.log(this.valueOf());
  // console.log(this.constructor.name)
  // console.log(this.toString())
  return `[object ${this.constructor.name}]`;
};

// null.toString()
true.toString2();
"12".toString2();
// ({}).toString2()

function Parent() {}
var p1 = new Parent();
console.log(true.toString2());
console.log((13).toString2());
console.log(Symbol("12").toString2());
console.log(p1.toString2());
console.log(p1.toString());
console.log(Object.prototype.toString.call(12));
