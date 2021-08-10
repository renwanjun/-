import { expect } from "chai";
import factory from '../a2b3'

describe("实现一个转换函数", () => {
  
    it("should return aabbbccccc", () => {
        expect(factory('a2b3c5')).to.equal('aabbbccccc')
    })
})