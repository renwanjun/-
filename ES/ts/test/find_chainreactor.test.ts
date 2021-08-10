import { expect } from "chai";
import find from "../find_chainreactor";
const data = [
    { userId: 8, title: 'title1' },
    { userId: 11, title: 'other' },
    { userId: 15, title: null },
    { userId: 19, title: 'title2' }
];



//=> 返回 [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
// console.log(result.value);

describe("实现一个类似orm得find链式调用", () => {
    // 查找data中，符合where中条件的数据，并根据orderBy中的条件进行排序
    const result = find(data).where({
        "title": /\d$/   // 这里意思是过滤出数组中，满足title字段中符合 /\d$/的项
    }).orderBy('userId', 'desc');  // 这里的意思是对数组中的项按照userId进行倒序排列
    it("should return [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }]", () => {
        expect(result).to.deep.equal([{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }])
    })
})