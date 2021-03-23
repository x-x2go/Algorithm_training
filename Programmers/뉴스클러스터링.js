const str1 = "handshake";
const str2 = "shake hands";

console.log(solution(str1, str2));
function solution(str1, str2) {

    const makeMulSets = str => {
        let mulSets = [];
        for(let i = 0; i < str.length - 1; i++){
            const word = str[i] + str[i+1];
            if(/[A-Za-z]{2}/.test(word)){
                mulSets.push(word.toUpperCase());
            }
        }
        return mulSets;
    }

    const intersection = (set1, set2) => set1.filter( word => {
        const index = set2.indexOf(word);
        if(index < 0) return false;
            
        set2.splice(index, 1);
        return true;
    });

    const getJaccardSimilarity = (set1, set2) => {
        if(!set1.length  && !set2.length) return 1;

        const overlapCnt = intersection(set1, set2).length;
        return overlapCnt / set1.length + set2.length - overlapCnt;
    }

    const set1 = makeMulSets(str1);
    const set2 = makeMulSets(str2);

    
    return parseInt( getJaccardSimilarity(set1, set2) * 65536);

}