const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const course = [2,3,5];

console.log(solution(orders, course));

function solution(orders, course) {

    let candidate = {};

    const answer = course.reduce((answer, num)=>{
        candidate = {}
        for(let i = 0; i < orders.length; i++){
            if(orders[i] < num) continue;

            combination(orders[i].split("").sort(), "", orders[i].length, num, 0);
        }

        let temp = [];
        let cnt = 0;
        for(key in candidate){
            let value = candidate[key];
            if(value > 1){
                if(value > cnt){
                cnt = value;
                temp = [key];
                }else if(value === cnt){
                temp.push(key);
                }
            }
        }
        cnt = 0;
        return [...answer, ...temp];

    },[]);

    function combination(arr, target, n, r, count) {
        if(r === 0){
            let cnt = candidate[target] || 0;
            candidate[target]= cnt + 1;
        } 
        else if(n === 0 || n < r) return; 
        else { 
            combination(arr, target + arr[count], n - 1, r - 1, count + 1); 
            combination(arr, target, n - 1, r, count + 1); 
        } 
    }

    return answer.sort();
}