// @ts-nocheck
//注释来忽略类型检查
// 如何实现一个orm类似得find链式调用
export default function find(data:any[]) {
  return {
    data: data,
    where(match: object) {
      this.data=this.data.filter((item: object) => {
        return Object.entries(match).every(([key, value]) => {
          if (value instanceof RegExp) {
            return value.test(item[key]);
          }
          return item[key]===value
        });
      });
      return this
    },
    orderBy(key:string,type:string='desc') {
      return this.data.sort((a,b)=>{
        return type!=='desc'?a[key]-b[key]:b[key]-a[key];
      })
    },
  };
}

const data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' }
];
const result = find(data).where({
  "title": /\d$/   // 这里意思是过滤出数组中，满足title字段中符合 /\d$/的项
}).orderBy('userId', 'desc');  // 这里的意思是对数组中的项按照userId进行倒序排列

// console.log(result)
console.info(result)