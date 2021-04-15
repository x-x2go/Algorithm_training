
const N = 5;
const number = 12;

console.log(solution(N, number));
function solution(N, number) {
    let results = [0, [N]];
    let check = new Set();
    
    const operation = (a, b) => [a + b, a - b, b - a, a * b, Math.round(a / b), Math.round(b / a)];

    const addResult = arr => arr.filter(n=>{
            if(check.has(n) || n === 0) return false;
            check.add(n);
            return true;
        });


    const calculate = (cnt) => {
        if(cnt > 8) return -1;

        let len = Math.round(cnt / 2);
        
        let num = Number((N+"").repeat(cnt));
        let arr= [num];
        check.add(num);

        for(let i = 1; i <= len; i++){
            results[i].forEach(a => results[cnt - i].forEach(b => {
                arr = arr.concat(addResult(operation(a, b)));
            }))
            if(check.has(number)) return cnt;
            results[cnt]= arr;
        }

        return calculate(cnt + 1);
    }

    return (N === number)? 1 : calculate(2);
}