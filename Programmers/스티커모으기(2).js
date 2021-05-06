const sticker = [1, 3];
console.log(solution(sticker));


function solution(sticker) {
    const N = sticker.length;
    let result1 = new Array(N);
    let result2 = new Array(N);

    const check = (result, index) => Math.max(result[index-1], result[index-2] + sticker[index]);
    if(N <= 1) return sticker[0];

    // 첫 스티커를 뜯었을 때
    result1[0] = sticker[0];
    result1[1] = sticker[0];

    // 첫 스티커를 뜯지 않았을 때
    result2[0] = 0;
    result2[1] = sticker[1];


    for(let i = 2; i <= N - 1; i++){
        result1[i] = check(result1, i);
        result2[i] = check(result2, i);
    }

    result1[N - 1] = result1[N - 2];

    return Math.max(result1[N - 1], result2[N - 1]);
}