/**
 * 使用promise实现每隔一秒输出1,2,3
 */
function case1() {
    const arr = [1, 2, 3]
    arr.reduce((p, x) => {
        return p.then(() => {
            return new Promise(r => {
                setTimeout(() => r(console.log(x)), 1000)
            })
        })
    }, Promise.resolve())
    // 完全剪头函数间写
    // arr.reduce((p, x) => p.then(() => new Promise(resolve => setTimeout(() => resolve(console.log(x)), 1000))), Promise.resolve())
}
// case1()

function case2() {
    function red() {
        console.log('red')
    }
    function yellow() {
        console.log('yellow')
    }
    function green() {
        console.log('green')
    }

    function light(timer, cb) {
        return new Promise(resolve => {
            setTimeout(() => {
                cb()
                resolve()
            }, timer)
        })
    }

    const step = function () {
        Promise.resolve().then(() => {
            return light(3000, red)
        }).then(() => {
            return light(2000, green)
        }).then(() => {
            return light(1000, yellow)
        }).then(() => {
            return step()
        })
    }

    step();

}

//第 1 题：写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal 
function mySetInterVal(fn, a, b) {
    let id = null
    function innerSetTimeout(init, interval) {
        // console.time('global')
        return setTimeout(() => {
            fn()
            // console.timeEnd('global')
            id = innerSetTimeout(init + interval, interval)
        }, init)
    }
    id = innerSetTimeout(a, b)
    return () => {
        clearTimeout(id)
    }
}
const myClear = mySetInterVal(() => { console.log('hhh') }, 100, 0)
setTimeout(myClear, 8000)
// myClear()
