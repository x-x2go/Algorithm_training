const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];

console.log(solution(maps));

function solution(maps) {

    const x = [-1, 1, 0, 0];
    const y = [0, 0, -1, 1];

    const m = maps.length;
    const n = maps[0].length;

    const queue = [[0,0]];

    const checkValidLocation = (mx, my) =>( mx >= 0 && my >= 0 && mx < m && my < n );
    const checkPath = (mx, my) => maps[mx][my] === 1;
    const checkArrive = (nx, ny) => (nx === m - 1 && ny === n - 1);

    while(queue.length){
        const [nx, ny] = queue.shift();
        
        if(checkArrive(nx, ny)) return maps[nx][ny];

        x.forEach((_x,i)=>{
            let mx = nx + _x;
            let my = ny + y[i];
            if(checkValidLocation(mx, my)){
                if(checkPath(mx, my) && (mx || my)){
                    maps[mx][my] = maps[nx][ny] + 1;
                    queue.push([mx,my]);
                } 
            }
        })
    }
    return -1;

}