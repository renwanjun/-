const arr=[1,2,3,4,5]

/**
 * 模拟实现Array的map方法
 */
Array.prototype.map2=function(fn){
    let result=[]
    for(let i=0,len=this.length;i<len;i++){
        result.push(fn.call(null,this[i],i,this))
    }
    return result
}

function memorization(fn){
    let cache={} // 将值保存在闭包内
    return function(){
        let key=arguments.length+Array.prototype.join.call(arguments,",")
        if(key in cache)return cache[key]
        else return cache[key]=f.apply(this,arguments)
    }
}