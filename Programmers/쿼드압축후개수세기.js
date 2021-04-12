const arr = [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]];

console.log(solution(arr));

function solution(arr) {
    let total = [0, 0];

    const compress = (arr, n) => {

        const value = arr[0][0];
        if(n <= 1) {
            total[value] += 1;
            return;
        }

        const sum = arr.reduce((sum, row)=>sum + row.reduce((s, v)=>s+v),0);

        if(sum === 0 || sum === n * n){
            total[value] += 1;
            return;
        }


        const divide1 = arr.slice(0, n/2);
        const divide2 = arr.slice(n/2);

        compress(divide1.map(values=>values.slice(0, n/2)), n/2);
        compress(divide1.map(values=>values.slice(n/2)), n/2);
        compress(divide2.map(values=>values.slice(0, n/2)), n/2);
        compress(divide2.map(values=>values.slice(n/2)), n/2);


    }

    compress(arr, arr.length);
    return total;
}