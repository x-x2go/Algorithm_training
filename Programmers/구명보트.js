const people = [70, 50, 80, 20, 10, 50, 50, 40, 90, 50];
const limit = 100;
console.log(solution(people, limit));

function solution(people, limit) {

    people.sort((a,b)=> b - a);
    let boat = 0;

    for(let front = 0, back = people.length - 1; front <= back; front++){
        if(people[front] + people[back] <= limit){
            back--;
        }
        boat++;
    }

    return boat;

}