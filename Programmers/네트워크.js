const n = 3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

console.log(solution(n, computers));
function solution(n, computers) {
    let check = new Array(n).fill(false);
    let cnt = 0;

    const dfs = target => {
        computers[target].forEach((connect, i)=>{
            if(connect && !check[i]){
                check[i] = true;
                dfs(i);
            }
        })
    }

    for(let i = 0; i < n; i++){
        if(check[i]) continue;

        check[i] = true;
        dfs(i);
        cnt++;

    }
    return cnt;
}