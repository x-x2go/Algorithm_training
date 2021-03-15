
const gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];

console.log(solution(gems));
function solution(gems) {
    const num = new Set(gems).size;
    let endPoint = -1;
    let getGems = new Map();
    return gems.reduce((result, gem, i)=>{
        if(endPoint >= 0 &&  i > endPoint) return result;

        while (num > getGems.size){
            if(endPoint >= gems.length - 1) return result;
            endPoint++;
            const cnt = getGems.get(gems[endPoint]) || 0;
            getGems.set(gems[endPoint], cnt + 1);
        }

        getGems.set(gem, getGems.get(gem) - 1);
        if(getGems.get(gem) === 0){
            getGems.delete(gem);
        }

        return (result[1] - result[0] > endPoint - i)? [i + 1, endPoint + 1] : result;
    }, [1, gems.length]);
}