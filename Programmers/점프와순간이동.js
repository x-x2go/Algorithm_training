
const n = 1000;
console.log(solution(n));

function solution(n){
    return n.toString(2).replace(/0/g,"").length;
}