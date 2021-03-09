const n = 22;

console.log(solution(n));

function solution(n) {
    const number124 = [ 4, 1, 2];
    let answer = "";
    let num = n;
    while(num >= 3){
        answer = number124[num % 3] + answer;
        num = (num % 3 === 0)? num / 3 - 1 : parseInt(num / 3);
    }

    return (num === 0)? answer : number124[num] + answer;
}
