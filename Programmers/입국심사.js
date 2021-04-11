const n = 6;
const times = [ 7, 10];

console.log(solution(n, times));

function solution(n, times) {

    times.sort((a, b)=> a - b);

    let N  = times.length;
    let min = 0;
    let max = times[N - 1] * Math.ceil(n / N);

    while(min < max) {
        let mid = Math.floor((min + max) / 2 );
        let finish = 0;

        for(let i = 0; i < N; i++){
            finish += Math.floor(mid / times[i]);
            if(finish > n) break;
            
        }
        /* 내림을 해주기 때문에, finish === n 이어도 그보다 적은 시간이 정답일 수도 있다.
        따라서 finish === n 이라고 바로 탐색을 완료하면 안된다. */
        (finish >= n) ? max = mid: min = mid + 1;
    }

    return max;
}