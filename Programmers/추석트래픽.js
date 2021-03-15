
const lines =  [
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
    ];

console.log(solution(lines));
function solution(lines) {

    let startTime = []; 
    let finishTime = [];

    const getSeconds = time =>time.split(":")[0]*3600000 + time.split(":")[1]*60000 + time.split(":")[2]*1000;

    lines.forEach(x=>{
        const time = getSeconds(x.split(" ")[1]);
        finishTime.push(time);
        startTime.push((time - x.split(" ")[2].replace("s","")*1000)+1);
    })

    // 비교점
    const points = startTime.concat(finishTime).sort((a,b)=> a - b);

    return points.reduce((result, t, i)=>{
        let cnt = 0;
        for(let j = 0; j < startTime.length; j++){
            if((points[i]+999) >= startTime[j] && points[i] <= finishTime[j]){
                cnt++;
            }
        }
        return result < cnt ? cnt : result;
    },0);
}