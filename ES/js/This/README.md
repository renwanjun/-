# this的指向问题总结

## ES5标准中 浏览器环境和NodeJS环境

在浏览器环境中，全局代码中的this指向window变量
```
this===window  // true 
```
在Node环境中，模块中的this指向module.exports默认指向的变量。而global变量和globalThis变量指向同一个变量。

```
this===module.exports //true
global===globalThis //true
this===global // false
```

