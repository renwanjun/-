/**
 * 参考资料：https://github.com/mqyqingfeng/Blog/issues/22
 * 因为这个例子很简单，所以浏览器完全反应的过来，可是如果是复杂的回调函数或是 ajax 请求呢？假设 1 秒触发了 60 次，每个回调就必须在 1000 / 60 = 16.67ms 内完成，否则就会有卡顿出现
 */
var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this, e)
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;
var setUserAction = debounce(getUserAction, 1000, true);
container.onmousemove = setUserAction

document.getElementById('cancelBtn').addEventListener('click', setUserAction.cancel)

/**
 * 注意点：1.this指向 2.event对象
 * @param {*} func 
 * @param {*} wait 
 * @param {} immediate
 * @returns 
 */
// 简版，主要用于描述思想
// function debounce(func, wait) {
//     var timeout
//     return function () {
//         var context = this,
//             args = arguments
//         if (timeout) clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             func.apply(this, args)
//         }, wait)
//     }
// }

function debounce(func, wait, immediate) {
    var timeout, result

    var debounced = function () {
        var context = this;
        var args = arguments;
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }

        return result
    }
    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = null
    }
    return debounced
}