//@ts-nocheck
const add = function () {
    let _args = Array.from(arguments);
    function fn() {
        _args.push(...arguments);
        // 返回结果
        return add.apply(null, _args);
    }
    fn.toString = function () {
        return _args.reduce((sum, cur) => sum + cur);
    };
    return fn;
};
// console.log(add(1)(2)(3)==6);
// console.log(add(1)(2)(3).toString())
//# sourceMappingURL=add.js.map