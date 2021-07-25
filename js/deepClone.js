


/**
 * 实现基本类型的拷贝和引用类型的深拷贝
 * 遍历对象和数组直到基本数据类型再拷贝，考虑循环引用自身的情况.
 * 循环引用的问题，开辟另外一个存储空间用来存放复制对象，在遍历的过程中检测引用类型是否出现过
 * @param {Any} origin 
 */
function deepClone(origin, hash = new WeakMap()) {
    if (origin === null) return origin
    if (origin instanceof Date) return new Date(origin)
    if (origin instanceof RegExp) return new RegExp(origin)
    if (typeof origin !== 'object') return origin

    if (hash.get(origin)) return hash.get(origin)

    let cloneObj = new origin.constructor()
    hash.set(origin, cloneObj)

    for (let key in origin) {
        if (origin.hasOwnProperty(key)) {
            // 实现递归拷贝
            cloneObj[key] = deepClone(origin[key], hash)
        }
    }
    return cloneObj
}


module.exports = deepClone


let obj = { name: 1, address: { x: 100 } };
obj.o = obj;
// 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);

// let origin = {
//     age: 1,
//     jobs: {
//         first: "FE"
//     },
//     schools: [
//         {
//             name: "shenda"
//         },
//         {
//             name: "shiyan"
//         }
//     ],
//     arr: [
//         [
//             {
//                 value: "1"
//             }
//         ],
//         [
//             {
//                 value: "2"
//             }
//         ]
//     ]
// };
