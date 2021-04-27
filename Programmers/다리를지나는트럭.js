const bridge_length = 5;
const weight= 10;
const truck_weights = [7,2,2,2,5,9];

console.log(solution(bridge_length, weight, truck_weights));
function solution(bridge_length, weight, truck_weights) {
    let q = [];
    let totalWeight = 0;
    let time = 1;

    truck_weights.forEach(truck=>{
        
        while(totalWeight + truck > weight || (q[0] && q[0][1] <= time)){
            const [w, t] = q.shift();
            if(time < t) time = t;
            totalWeight -= w;
        }

        q.push([truck, bridge_length + time]);
        totalWeight += truck;
        time++;

    });

    return q[q.length-1][1];
}