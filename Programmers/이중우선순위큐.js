const operations = 	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];

console.log(solution(operations));
function solution(operations) {
    let queue = [];

    const insert = num => {
        let i = 0;
        while(i < queue.length){
            if(num > queue[i]) break;
            i++;
        }
        queue.splice(i, 0, num);
    }

    operations.forEach(op=> {
        if(op.split(" ")[0] === "I"){
            insert(Number(op.split(" ")[1]));
        }else{
            if(op.split(" ")[1] === "1") queue.shift();
            else queue.pop();
        }
    });

    return queue.length ? [queue.shift(), queue.pop()] : [0, 0];

}