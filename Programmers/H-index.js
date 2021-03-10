const citations = [3, 0, 6, 1, 5];

console.log(solution(citations));

function solution(citations) {
    
    let answer = 0;
    citations.sort((a, b)=> b-a).forEach((x,i)=>{
        if(x > answer){
            answer = i + 1;
        } 
    });

    return answer;
}