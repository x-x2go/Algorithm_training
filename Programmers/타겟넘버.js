const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target));
function solution(numbers, target) { 
    let cnt = 0;

    const calculate = (arr, sum, i) =>{
        if(arr.length <= i){
            if(sum === 0){
                cnt++;
            }
            return;
        }
        const num = arr[i];
        calculate(arr, sum + num, i + 1);
        calculate(arr, sum - num, i + 1);
    }

    calculate(numbers, target, 0);

    return cnt;
}