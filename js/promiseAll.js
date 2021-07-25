/**
 * 
 * 
 * 1、接收一个 Promise 实例的数组或具有 Iterator 接口的对象
 * 2、如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
 * 3、如果全部成功，状态变为 resolved，返回值将组成一个数组传给回调
 * 4、只要有一个失败，状态就变为 rejected，返回值将直接传递给回调all() 的返回值也是新的 Promise 对象
 * 
 * @param {*} promises 
 * @returns 
 */
function promiseAll(iterable) {
    let array=Array.from(iterable)
    let resolveNum=0
    let promiseNum=array.length
    let lists=new Array(promiseNum)

    return new Promise((resolve, reject) =>{
        for(let p of array){
            Promise.resolve(p).then(res=>{
                lists.push(res)
                resolveNum++
                if(resolveNum==promiseNum){
                    return resolve(lists)
                }
            }).catch(reason=>{
                return reject(reason)
            })
        }
    })
}

let promises=new Array(0,1,2,3).map(val=>{
    return new Promise((resolve,reject)=>{
        if(val==3){
            reject(val)
        }
        resolve(val)
    })
})

promiseAll(promises).then(res=>{
    console.log(res)
}).catch(reason=>{
    console.log(reason)
})

module.exports=promiseAll


