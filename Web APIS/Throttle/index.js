// https://segmentfault.com/a/1190000018428170/

var count = 1;
var container = document.getElementById("container");
container.onmousemove = throttle(getUserAction, 3000);

console.log("ddd");
function getUserAction(e) {
  console.log(this, e);
  container.innerHTML = count++;
}
// function throttle(func, wait) {
//
//     var previous = 0

//     return function () {
//var context, args
//         var now = +new Date()
//         context = this
//         args = arguments
//         if (now - previous > wait) {
//             func.apply(context, args)
//             previous = now
//         }
//     }
// }

// function throttle(func, wait) {
//     var timeout
//     return function () {
//         var context = this, args = arguments
//         if (!timeout) {
//             timeout = setTimeout(() => {
//                 timeout = null
//                 func.apply(context, args)
//             }, wait)
//         }
//     }
// }

// function throttle(func, wait) {
//     var timeout, previous
//     previous = 0
//     return function () {
//         var now = +new Date()
//         if (!timeout) {
//             if (now - previous > wait) {
//                 func.apply(this, arguments)
//                 previous = now
//             } else {
//                 timeout = setTimeout(()=>{
//                     func.apply(this, arguments)
//                     previous=+new Date()
// timeout=null
//                 },wait)
//             }
//         }

//     }
// }

function throttle(func, wait) {
  var timeout, context, args, result;
  var previous = 0;

  var later = function () {
    previous = +new Date();
    timeout = null;
    func.apply(context, args);
  };

  var throttled = function () {
    var now = +new Date();
    //下次触发 func 剩余的时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 如果没有剩余的时间了或者你改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled;
}
