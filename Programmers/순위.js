const n = 5;
const results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];

console.log(solution(n, results));


function solution(n, results) {
    let matchs = Array.from({length: n + 1}, () => Array(n + 1).fill(false));
    let count = new Array(n + 1).fill(0);

    results.forEach(([win, lose])=> {
        matchs[win][lose] = true;
    });


    for(let k = 1; k <= n; k++){
        for(let i = 1; i <= n; i++){
            for(let j = 1; j <= n; j++){
                if(!matchs[i][j]){
                    if(matchs[i][k] && matchs[k][j]) matchs[i][j] = true;
                }
            }
        }
    }

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){

            if(matchs[i][j]){
                count[i] += 1;
                count[j] += 1;
            }
        }
    }

    return count.filter(total=>total === n - 1).length;
}