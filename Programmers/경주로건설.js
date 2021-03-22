const board = [[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]];
console.log(solution(board));


function solution(board){
    const N = board.length;
    /* [x, y, direction, cost] */
    let q = [[0, 1, 1, 100], [1, 0, 2, 100]];

    const _x = [-1, 0, 1, 0];
    const _y = [0, 1, 0, -1];

    const checkValidLocation = (mx, my) =>( mx >= 0 && my >= 0 && mx < N && my < N );

    while(q.length){
        let [x, y, direction, cost] = q.shift();
        if(board[x][y] === 0 || board[x][y] >= cost){
            board[x][y] = cost;

            _x.forEach((_,i) => {
                    // 역방향인지 확인
                    if(Math.abs(i - direction) != 2){
                        const _cost = cost + (direction === i? 100 : 600);
                        if (checkValidLocation( x + _x[i], y + _y[i])){
                            q.push([x + _x[i], y + _y[i], i, _cost]);
                        }
                    }
            });
        }
    }
    return board[N-1][N-1];
}
