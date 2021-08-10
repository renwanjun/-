//@ts-nocheck
export default function factory(pattern: string) {
  let regexp: RegExp = /(?<letter>[A-Za-z])(?<nums>\d)/g;
  let match: RegExpExecArray | null = regexp.exec(pattern);
  let result:string=''
  while (match) {
    let {letter,nums}=match.groups
    result+=Array(Number(nums)).fill(letter).join("")
    match = regexp.exec(pattern);
  }
  return result
}

console.log(factory('a3b4d5'))