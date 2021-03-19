const arr = [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]];

console.log(solution(arr));

function solution(arr) {
    const division = (arr, start, end)=>{
        return arr.slice(start[0],start[1]).map((x,_)=>x.slice(end[0],end[1]));
    }

    const compression = arr => {
        const n = arr.length;
        const cnt = arr.reduce((sum, row)=> sum + row.reduce((a,b)=>a+b),0);

        if(cnt === n*n || cnt === 0) return arr[0][0];

        return [].concat(
        compression(division(arr, [0, n/2], [0,n/2])),
        compression(division(arr, [0, n/2], [n/2,n])),
        compression(division(arr, [n/2,n], [0, n/2])),
        compression(division(arr, [n/2,n], [n/2,n]))
        );
    }

    
    const answer = compression(arr);
    
    if(!answer.length) return [Math.abs(answer-1), answer];
    
    const num = answer.reduce((a,b)=>a+b);
    return [answer.length - num, num];
}