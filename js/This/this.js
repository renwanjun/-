'use strict'
/**
 * 谈讨this
 * ECMAScript规范中对this的解释：this关键字执行为当前执行环境的ThisBing
 * MDN：在绝大多数情况下，函数的调用方式决定了this的执行
 * 可以确定的是，this的指向是调用时决定的，这就导致了this指向的迷惑性
 */
let a = 1
    , b = 2
    , obj = {
        a: 'inside a',
        method(fn) {
            if (typeof fn === 'function') fn()
            function inner() {
                console.log('inner', this)
            }
            inner()
            console.log(this.a)
        }

        , obj1 = {
            b: 'inside b'
        }
    }
console.log('Node模块中的this:', this)
obj.method()
