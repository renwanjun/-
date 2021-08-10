"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
function factory(pattern) {
    let regexp = /(?<letter>[A-Za-z])(?<nums>\d)/g;
    let match = regexp.exec(pattern);
    let result = '';
    while (match) {
        let { letter, nums } = match.groups;
        result += Array(Number(nums)).fill(letter).join("");
        match = regexp.exec(pattern);
    }
    return result;
}
exports.default = factory;
console.log(factory('a3b4d5'));
//# sourceMappingURL=a2b3.js.map