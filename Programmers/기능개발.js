const progresses = [93, 30, 55];
const speeds = [1, 30, 5];


console.log(solution(progresses, speeds));
function solution(progresses, speeds) {

    const distribution = [];
    const finished = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]));

    let finalday = finished[0];
    let cnt = 0;
    finished.forEach((day, i) =>{
        if(day > finalday){
            distribution.push(cnt);
            finalday = day;
            cnt = 0;
        }

        cnt++;
    })

    distribution.push(cnt);

    return distribution;
}