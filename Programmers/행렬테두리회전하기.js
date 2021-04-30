const rows = 6;
const columns = 6;
const queries = [[2,2,5,4],[3,3,6,6],[5,1,6,3]];

console.log(solution(rows, columns, queries));
function solution(rows, columns, queries) {
    let arr = Array.from(Array(rows + 1), () => Array(columns + 1).fill(0));

    let num = 1;
    for(let i = 1; i <= rows; i++){
        for(let j = 1; j <= columns; j++){
            arr[i][j] = num;
            num++;
        }
    }

    const checkMin = (min, q) => min > q ? q : min;

    return queries.map(([sx, sy, ex, ey])=>{
        let start = arr[sx][sy];
        let min = start;

        for(let i = sx; i < ex; i++){
            min = checkMin(min, arr[i + 1][sy]);
            arr[i][sy] = arr[i + 1][sy];
        }
        for(let i = sy; i < ey; i++){
            min = checkMin(min, arr[ex][i + 1]);
            arr[ex][i] = arr[ex][i + 1];
        }
        for(let i = ex; i > sx; i--){
            min = checkMin(min, arr[i - 1][ey]);
            arr[i][ey] = arr[i - 1][ey];
        }
        for(let i = ey; i > sy; i--){
            min = checkMin(min, arr[sx][i - 1]);
            arr[sx][i] = arr[sx][i - 1];
        }
        arr[sx][sy + 1] = start;

        return min;
    });
}