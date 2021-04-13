const n = 5;
const costs = [[0, 1, 1], [2, 3, 1], [3, 4, 2], [1, 2, 2], [0, 4, 100]];

console.log(solution(n, costs));

function solution(n, costs) {

    /* 크루스칼 알고리즘 사용 */

    let rootnode = Array.apply(null, new Array(n)).map((_, i)=> i);
    let totalCost = 0;
    let N = costs.length;

    const findRootNode = a => {
        if(a === rootnode[a]) return a;

        return findRootNode(rootnode[a]);
    }

    costs.sort((a, b)=> a[2] - b[2]);
    

    for(let i = 0; i < N; i++){
        const [a, b, cost] = costs[i];

        let nodeA = findRootNode(a);
        let nodeB = findRootNode(b);

        if(nodeA === nodeB) continue;

        totalCost += cost;
        (nodeA > nodeB)? rootnode[nodeA] = nodeB : rootnode[nodeB] = nodeA;
        
    }

    return totalCost;
}