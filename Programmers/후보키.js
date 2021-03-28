const relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

console.log(solution(relation));

function solution(relation) {
    const cols = relation[0].length;

    const check = 1 << cols;
    const answer = new Set();

    for(let i = 1; i < check; i++){
        let temp = relation.map(x=>x.filter((col,index)=>i & (1<<index)).join(""));
        const set  = new Set(temp);
        
        if(temp.length === set.size) answer.add(i);
    }
 
    // 최소성 만족하는지 확인
    for( let x of answer){
        for ( let y of answer){
            if(x >= y) continue;
            if((x & y) === x) answer.delete(y);
        }
    }
    

    return answer.size;
}