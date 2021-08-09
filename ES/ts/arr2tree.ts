// @ts-check
interface Department {
  id: number;
  name: string;
  pid: number;
  children: Array<Department>;
}
/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem: Department = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
};
/**
 * 转换方法
 */
function array2Tree(data, pid): []<Department> {
  const result: []<Department> = []<Department>;
  getChildren(data, result, pid);
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
