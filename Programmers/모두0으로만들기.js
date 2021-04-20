const a = [-5, 0, 2, 1, 2];
const edges = [[0,1],[3,4],[2,3],[0,3]];

console.log(basic(a, edges));

/* test case 7, 8, 16, 17 runtime error */
/* stack의 limit 초과가 문제인듯 하다 */

function solution(a, edges) {
    const N = a.length;
    let graph = Array.from({length: N}, () => []);

    edges.forEach(([a, b])=>{
        graph[a].push(b);
        graph[b].push(a);
    })

    let answer = 0;
    
    const dfs = (parant, node) => {
        for( let i = 0; i < graph[node].length; i++){
            let next = graph[node][i];

            if(next === parant) continue;
            dfs( node, next);         
        }
        answer += Math.abs(a[node]);
        a[parant] += a[node];
    };

    dfs(0, 0);

    return a[0] ? -1 : answer;
}
