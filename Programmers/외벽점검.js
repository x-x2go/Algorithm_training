const n = 12;
const weak = [1, 3, 4, 9, 10];
const dist = [3,5,7];

console.log(solution(n, weak, dist))

function solution(n, weak, dist) {
    const weakcnt = weak.length;
    const friendNum = dist.length;
    const distance = weak.reduce((distance, pos, i)=>{
        if(i === weakcnt - 1) return [...distance, n - pos + weak[0]];
        return [...distance, weak[i+1] - pos];
    },[]);

    dist.sort((a,b)=> b- a);

    let orders = [];

    const permutation = (arr, order = []) => {
        if (arr.length === 0) {
            orders.push(order);
        } else {
          for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permutation(curr.slice(), order.concat(next))
         }
       }
    }

    const check = (weaks, orders, num) => {
        const len = weaks.length;
        for(let i = 0; i < orders.length; i++){
            let index = -1;
            for(let j = 0; j < num; j++){
                let totaldist = 0;
                while(index < len){
                    index++;
                    totaldist += weaks[index];

                    if(totaldist > orders[i][j]) break;
                }
            }

            if(index >= len) return true;
        }
        return false;
    }

    for(let num = 0; num < friendNum; num++){
        orders = [];
        permutation(dist.slice(0,num + 1));
        for(let i = 0; i < weakcnt; i++){
            if(check(distance.slice(i + 1).concat(distance.slice(0, i)), orders, num + 1)){
                return num + 1;
            }
        }
    }

    return -1;
}