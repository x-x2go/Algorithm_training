const board = [[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]];
console.log(solution(board));

function solution(board) {

    const N = board.length;
    /* [x, y, vertical or horizontal, time] */
    let route = [];
    
    let check = Array.from({length: N}, () => Array.from({length: N}, ()=>[false,false]));

    /* 0 : vertical   1: horizontal  */
    const robot = {
        0: (x,y)=>[x+1, y],
        1 : (x,y)=> [x, y + 1],
    };
    
    const _x = [-1, 0, 1, 0];
    const _y = [0, 1, 0, -1];


    route.push([ 0, 0, 1, 0]);
    check[0][0][1] = true;


    // board의 범위 안에서 움직이는지 확인
    const checkValidLocation = (x, y, direction) =>{
        const [mx, my] = robot[direction](x,y);
        return x >= 0 && y >= 0 && mx < N && my < N 
    };

    // 회전할 수 있는지 확인
    const checkValidRotate = (x, y, direction) => checkValidMovement(x, y, direction) === 0;

    // 이동할 수 있는지 (로봇의 예상 위치값의 합이 0인지) 확인
    const checkValidMovement = (x, y, direction) =>{ 
        if(!checkValidLocation(x, y, direction)) return 2;

        const [mx, my] = robot[direction](x,y);
        return board[x][y] + board[mx][my];
    } 

    // 목적지에 도착했는지 확인
    const arriveAtDestination = (x, y, direction) => direction ?  (x === N - 1 && y === N - 2) : (x === N - 2 && y === N - 1);

    // 방문한 위치인지 확인 후 방문 했다고 표시
    const checkVisited = (x, y, direction) => {
        if(!check[x][y][direction]){
            check[x][y][direction] = true;
            return false;
        }
        return true;
    }

    while(route.length){
        let [x, y, direction, time] = route.shift();
        if(arriveAtDestination(x, y, direction)) return time;

        // 이동
        _x.forEach((_,i) => {
            const nx = _x[i] + x;
            const ny = _y[i] + y;
            if(checkValidLocation(nx, ny , direction) && checkValidMovement(nx, ny, direction) === 0){
                if(!checkVisited(nx, ny, direction)){
                    route.push([nx, ny, direction, time + 1]);
                }
            }
        });
        
        // 회전
        if(direction){
            if(checkValidRotate(x + 1, y, direction)){
                if(!checkVisited(x, y, 0)) route.push([x, y, 0, time + 1]);
                if(!checkVisited(x, y + 1, 0)) route.push([x, y + 1, 0, time + 1]);
            }
            if(checkValidRotate(x - 1, y, direction)){
                if(!checkVisited(x - 1, y, 0)) route.push([x - 1, y, 0, time + 1]);
                if(!checkVisited(x - 1,y + 1, 0)) route.push([x - 1, y + 1, 0, time + 1]);
            }
        }else{
            if(checkValidRotate(x, y + 1, direction)){
                if(!checkVisited(x,y,1)) route.push([x, y, 1, time + 1]);
                if(!checkVisited(x + 1,y,1)) route.push([x + 1, y, 1, time + 1]);
            }
            if(checkValidRotate(x, y - 1, direction)){
                if(!checkVisited(x,y - 1,1)) route.push([x, y - 1, 1, time + 1]);
                if(!checkVisited(x + 1,y - 1,1)) route.push([x + 1, y - 1, 1, time + 1]);
            }
        }

        
    }


}
    