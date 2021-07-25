/**
 * 浏览器环境 && Node环境
 * 延迟执行函数的this
 * 
 * Node环境中 延迟执行函数中的this指向定时器本身
 */
var settimeou1=setTimeout(function(fn){
    if(typeof fn=='function')fn()
    console.log(this==globalThis,this==settimeou1)
},1500,inner)
function inner(){
    console.log(this==globalThis)
}