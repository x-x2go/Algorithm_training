const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(solution(begin, target, words));

function solution(begin, target, words) {
    const len = begin.length;
    let totalcount = 51;

    const match = (word1, word2)=>{
        let check = 0;
        for(let i = 0; i < len; i++){
            if(word1[i] !== word2[i]) check++;
            if(check > 1) return false;
        }
        return true;
    }

    const dfs = (arr, word, cnt) => {
        if(word === target){
            if(totalcount > cnt)
                totalcount = cnt;
            return;
        }
        for(let i = 0; i < arr.length; i++){
            if(match(word, arr[i])){
                let temp = arr.slice();
                temp.splice(i,1);
                dfs(temp, arr[i], cnt+1);
            }
        }
    }

    if(!words.includes(target)) return 0;

    dfs(words, begin, 0);

    return totalcount > 50 ? 0 : totalcount;
}