const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
console.log(solution(record));

function solution(record) {
    let nickname = {};
    let answer = [];

    const phrase = {
        "Enter" : "님이 들어왔습니다.",
        "Leave" : "님이 나갔습니다."
    }
    
    record.forEach(r=>{
        const [state, id, nick] = r.split(" ");
        if(nick){
            nickname[id] = nick;
        }
        
        if(state !== "Change") answer.push([state, id]);
        /* reduce를 사용하여 필터링 해주는 것 보다 따로 배열을 생성하여 넣어주는 방식이 시간이 덜 걸렸다. */
    });

    return answer.map( ([state, id]) => nickname[id]+phrase[state]);
}