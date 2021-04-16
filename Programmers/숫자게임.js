const A = [5,1,3,7];
const B = [2,2,6,8];

console.log(solution(A, B));
function solution(A, B) {
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    
    let score = 0;
    let N = A.length;
    for(let i = 0, j = 0; i < N; i++){
        if(A[i] >= B[j]) continue;
        score++;
        j++;
    }
    return score;
}