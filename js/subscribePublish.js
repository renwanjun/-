/**
 * 发布-订阅模式又叫观察者模式，它定义了对象间的一种一对多的关系，
 * 让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。
 * 
 * 发布订阅模式的优点：

  1. 支持简单的广播通信，当对象状态发生改变时，会自动通知已经订阅过的对象。

比如上面的列子，小明，小红不需要天天逛淘宝网看鞋子到了没有，在合适的时间点，发布者(卖家)来货了的时候，会通知该订阅者(小红，小明等人)。

  2. 发布者与订阅者耦合性降低，发布者只管发布一条消息出去，它不关心这条消息如何被订阅者使用，
  同时，订阅者只监听发布者的事件名，只要发布者的事件名不变，它不管发布者如何改变；
  同理卖家（发布者）它只需要将鞋子来货的这件事告诉订阅者(买家)，他不管买家到底买还是不买，还是买其他卖家的。只要鞋子到货了就通知订阅者即可。

  发布订阅模式的缺点：

  创建订阅者需要消耗一定的时间和内存。

  虽然可以弱化对象之间的联系，如果过度使用的话，反而使代码不好理解及代码不好维护等等。
 */
class Event {
    constructor() {
        this._cache = {}
    }
    on(type, callback) {
        let fns = this._cache[type] = this._cache[type] || []
        // let fns=this._cache[type]
        if (fns.indexOf(callback) === -1) {
            fns.push(callback)
        }
        return this
    }
    trigger(type, ...data) {
        let fns = this._cache[type]

        if (Array.isArray(fns)) {
            for (let fn of fns) {
                fn(...data)
            }
        } else {
            fns(...data)
        }
    }
    off(type, callback) {
        let fns = this._cache[type]
        if (!(fns && callback)) return this
        if (Array.isArray(fns)) {
            let index = fns.indexOf(callback)
            if (index !== -1) fns.splice(index, 1)
        } else {
            delete this._cache[type]
        }
        return this
    }
}
// 以下是测试函数

const event = new Event();
event
    .on("test", a => {
        console.log(a);
    })
    .trigger("test", "hello");