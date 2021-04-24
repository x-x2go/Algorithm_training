const m = 6;
const n = 6;
const board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];


console.log(solution(m, n, board));
function solution(m, n, board) {

    const rotate = arr => arr.map((row, i)=>Array.from(row).map((col, j)=> board[m-j-1][i]));
    const makeBlock = (x, y, arr) => [arr[x][y], arr[x][y+1], arr[x+1][y], arr[x+1][y+1]];
    const checkBlock = block => new Set(block).size === 1;

    let _board = rotate(Array.from({length: n}, () => Array(m)));


    const clearBlock = (arr, set) => {
        set.forEach((block)=>{
            const [x, y] = block.split(",");
            arr[x][y] = 0;
        })
        return arr.map(row=>row.filter(block=>block!=0));
    }

    const playing = (arr) => {
        let set = new Set();
        for(let i = 0; i < n - 1; i++){
            for(let j = 0; j < arr[i].length - 1; j++){
                const block = makeBlock(i, j, arr);
                if(block.includes(undefined)) continue;
                if(checkBlock(block)){
                        set.add(i+","+j)
                        .add((i+1)+","+j)
                        .add(i+","+(j+1))
                        .add((i+1)+","+(j+1));
                }
            }
        }
        if(set.size === 0) return 0;
        const newBoard = clearBlock(arr.slice(), set);
        return set.size + playing(newBoard);
    }

    return playing(_board);
}