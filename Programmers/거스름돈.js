const n = 5;
const money = [1,2,5];

console.log(solution(n, money));

function solution(n, money) {

    const check = Array.apply(null, new Array(n+1)).map((x, i)=>i % money[0] ? 0 : 1);

    for(let i = 1; i < money.length; i++){
        for(let j = money[i]; j <= n; j++){
            check[j] += check[j - money[i]];
        }
    }
 
    return check.pop() % 1000000007;
}