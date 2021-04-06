const n = 6, s = 4;
const a = 6, b = 2;
const fares = [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]];

console.log(solution(n, s, a, b, fares));
function solution(n, s, a, b, fares) {
    let min_fares = Array.from({length: n + 1}, () => Array(n + 1).fill(Infinity));


    // 다이렉트로 이어진 도로의 택시 요금을 배열에 반영
    fares.forEach(([start,end,fare])=>{
        min_fares[start][end] = fare;
        min_fares[end][start] = fare;
    });

    // A -> A 는 0으로 값 변경
    for(let i = 1; i <= n; i++){
        min_fares[i][i] = 0;
    }

    for(let mid = 1; mid <= n; mid++){
        for(let start = 1; start <= n; start++){
            for(let end = 1; end <= n; end++){
                const new_fare = min_fares[start][mid] + min_fares[mid][end];
                if(min_fares[start][end] > new_fare){
                    min_fares[start][end] = new_fare;
                }
            }
        }
    }

    // i는 합승이 끝나는 지점을 의미함.
    // i === s 일때는 합승을 하지 않는 경우를 의미함.
    let answer = Infinity;
    for(let i = 1; i <= n; i++){
        const total_fare = min_fares[s][i] + min_fares[i][a] + min_fares[i][b];
        if(answer > total_fare){
            answer = total_fare;
        }
    }
    
    return answer;
}