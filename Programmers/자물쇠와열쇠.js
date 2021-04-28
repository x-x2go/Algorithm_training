const key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]];
const lock=[[1, 1, 1], [1, 1, 0], [1, 0, 1]];

console.log(solution(key, lock));

function solution(key, lock) {
    const n = lock.length;
    const m = key.length;

    const rotate = arr => arr.map((row, i) => row.map((col, j)=> arr[m-j-1][i]));

    const match = (_key, _lock, x, y) =>{
        _key.forEach((row, i)=>row.forEach((col, j)=> _lock[x+i][y+j] += _key[i][j]));
        const isMatched = _lock.slice(m - 1,m + n - 1).map(x=>x.slice(m - 1,m + n - 1));
        return isMatched.reduce((result, x)=>{
            if(x.includes(0) || x.includes(2)) return false;
            return result
        },true);
    }
    
    const move = (key, lock_extend) =>{
        for(let x = 0; x < n + m - 1; x++){
            for(let y = 0; y < n + m - 1; y++){
                if(match(key, lock_extend.map(v => v.slice()), x, y)) return true;
            }
        }
        return false;
    }

    // 0으로 초기화된 2차배열 생성
    let lock_extend =  Array.from(Array(n+(m-1)*2), () => Array(n+(m-1)*2).fill(0));

    // 가운데에 lock 배열 넣기
    lock.forEach((x, indexX)=>{
        x.forEach((y, indexY)=>{
            lock_extend[m-1+indexX][m-1+indexY] = y;
        })
    })

    for(let i = 0; i < 4; i++){
        if(move(key, lock_extend)) return true;
        key = rotate(key);
    }

    return false;
}