/**
 * 递归查找，获取children
 */
const getChildren = (arr, result, pid) => {
    for (const item of arr) {
        if (item.pid === pid) {
            const newItem = Object.assign(Object.assign({}, item), { children: [] });
            result.push(newItem);
            getChildren(arr, newItem.children, item.id);
        }
    }
};
/**
 * 转换方法
 */
function array2Tree(arr, pid) {
    const result = [];
    getChildren(arr, result, pid);
    return result;
}
var arr = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 7 },
    { id: 5, name: "部门5", pid: 4 },
];
console.log(arr);
console.log(array2Tree(arr, 0));
// export default array2Tree;
//# sourceMappingURL=arr2tree.js.map