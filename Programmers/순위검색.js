const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];


console.log(solution(info, query));

/*

    participant[key] = [...score, value] 보다는
    score.push(value);
    participant[key] = score;

    요소를 삽입하면서 sort하기 보다는
    삽입이 모두 끝난 후 participant를 모두 돌면서 sort

*/

function solution(info, query) {
    const participant = {};
    const CATEGORY_NUM = 4;

    const pushInfo = (arr, index) =>{
        if(index >= CATEGORY_NUM){
            let value = +arr.pop();
            let key = arr.reduce((str, s)=>str + s,"");
            let score = participant[key] || [];
            score.push(value);
            participant[key] = score;
            return;
        }
        let temp = arr.slice();
        temp[index] = "-";

        pushInfo(arr, index + 1);
        pushInfo(temp, index + 1);
    }
    
    const binarySearching = (arr, score, start, end) => {

        let mid = Math.ceil((start + end)/ 2);

        arr[mid] >= score ? (start = mid + 1) : (end = mid - 1);

        if(start >= end ){
            if(start === end){
                mid = start;
            } 
            return arr[mid] >= score ? mid + 1 : mid;
        } 

        return binarySearching(arr, score, start, end);
    }
    
    info.forEach(x=>{
        pushInfo(x.split(" "), 0);
    });
    
    for(const key in participant){
        participant[key] = participant[key].sort((a,b)=>b-a);
    }

    return query.map(q=>{
        let key = q.replace(/ |and|[0-9]/g, "");
        let min_score = +q.match(/[0-9]+/g)[0];
        
        if(!participant[key]) return 0;
        
       return binarySearching(participant[key], min_score, 0, participant[key].length - 1);
    });
}