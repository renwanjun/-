/**
 * 普通函数调用时的this
 */
function normal() {
    arguments.caller
    arguments.callee==normal
    console.log('普通函数调用时的this:',this == global)
}
normal()