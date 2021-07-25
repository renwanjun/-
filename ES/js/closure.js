var f2;
function f1() {
  var a = 1;
  f2 = function () {
    console.log(a);
  };
  console.log(a);
}
f1();
// console.log(f2);
f1 = null;
// f1();
f2();
