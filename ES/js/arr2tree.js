var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * 递归查找，获取children
 */
var getChildren = function (data, result, pid) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (item.pid === pid) {
            var newItem = __assign(__assign({}, item), { children: [] });
            result.push(newItem);
            getChildren(data, newItem.children, item.id);
        }
    }
};
/**
 * 转换方法
 */
function array2Tree(data, pid) {
    var result = [];
    getChildren(data, result, pid);
    return result;
}
var arr = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 3 },
    { id: 5, name: "部门5", pid: 4 },
];
console.log(arr);
console.log(array2Tree(arr, 0));
// export default array2Tree;
