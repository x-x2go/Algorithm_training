
const a = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];


console.log(solution(a));

function solution(a) {

    let front_min = a[0];
    let back_min = new Array(a.length);
    let min = 1000000001;

    for(let i = a.length-1; i > 0; i--){
        if(a[i] < min){
            min = a[i];
        }
        back_min[i] = min;
    }
    
    let cnt = a.length < 2 ? 1 : 2;

    for(let i = 1; i < a.length - 1; i++){
        
        if(front_min > a[i]){
            front_min = a[i];
        }
        
        if(front_min < a[i] && back_min[i] < a[i]) continue;

        cnt++;
    
    }

    return cnt;
}