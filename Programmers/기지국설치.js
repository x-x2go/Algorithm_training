const n = 11;
const stations = [4, 11];
const w = 1;

console.log(solution(n, stations, w));
function solution(n, stations, w) {
    const range = 2 * w + 1;
    let checkPoint = 1;
    let stationNum = 0;

    stations.forEach(station=>{
        if(checkPoint < station){
            stationNum += Math.ceil((station - w - checkPoint)/ range);
        }
        checkPoint = station + w + 1;
    })

    return stationNum + Math.ceil((n - checkPoint + 1)/ range);
}