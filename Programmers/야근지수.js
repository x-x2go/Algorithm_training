const works = [2, 1, 2];
const n = 6;

console.log(solution(n, works));
function solution(n, works) {
    const N = works.length;
    const doWork = (arr, index, left)=>{
        while(left){
            for(let i = 0; i < index; i++){
                if(!left) break;
                arr[i] -= 1;
                left--;
            }
        }
        return arr;
    }

    works.sort((a,b)=>b-a);

    for(let i = 1; i <= N; i++){
        if(!n) break;

        const gap = i === N? works[i - 1] * i : (works[i - 1] - works[i]) * i;
        const minus = n > gap ? gap : n;
        works = doWork(works, i, minus);
        n -= minus;

    }


    return works.reduce((a,b)=>a + (b * b),0);
}
