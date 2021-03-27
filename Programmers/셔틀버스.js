const n = 2;
const t = 1;
const m = 2;
const timetable = ["09:00", "09:00", "09:00", "09:00"];

console.log(solution(n, t, m, timetable));
function solution(n, t, m, timetable) {
    const busSchedule = Array.apply(null, new Array(n)).map((x, i)=> 540 + t * i);
    const getMinutes = x => (x.split(":")[0] * 60) + (x.split(":")[1] * 1);
    const getHHMM = x => {
        const hours = Math.floor( x / 60 );
        const minutes = x % 60;
        return (hours < 10 ? "0" + hours : hours + "") +":"+( minutes < 10 ? "0" + minutes : minutes + "");
    };

    const crew = timetable.map(getMinutes).sort((a,b)=>a-b).filter(x=> x <= busSchedule[n-1]);
    let answer = getHHMM( 540 + t * (n-1));

    for(let i = 0; i < n; i++){
        const crewOnBus = crew.filter(x=>x <= busSchedule[i]).length;
        if(i == n - 1){
            if(crewOnBus >= m) answer = getHHMM(crew[m-1] - 1);
        }else{
            crew.splice(0, crewOnBus > m ? m : crewOnBus);
        }
    }
    return answer;
}