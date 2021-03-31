const n = 6;
const vertex = 	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

console.log(solution(n, vertex));

function solution(n, vertex) {

    let graph = Array.from({length: n + 1}, () => []);
    let check = new Array(n + 1).fill(false);

    check[1] = true;
    
    vertex.forEach(([a,b])=>{
        graph[a].push(b);
        graph[b].push(a);
    })

    const getNextNode = nodes => {
        let nextnode = [];
        nodes.forEach(node=>{
           nextnode = nextnode.concat(graph[node].filter(num=>{
                if(check[num]) return false;
                check[num] = true;
                return true;
            }));
        })
        return nextnode.length > 0?  getNextNode(nextnode) : nodes.length;
    }

    return getNextNode([1]);

}