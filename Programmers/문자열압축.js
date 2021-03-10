const s = "ababcdcdababcdcd";

console.log(solution(s));

function solution(s) {

    const compression = ( i, s, str ) => {

        let num = 1;

        while (s.substring(0, i) === s.slice(i * num , i * (num + 1))){
            if(num >= s.length) break;
            num++;
        }

        str += (num > 1 ? num : "") + s.substring(0, i);

        if( s.length < i) {
            return str.length;
        }

        return compression ( i, s.slice(i * num), str);

    }

    let answer = s.length;

    for(let i = 1; i <= s.length /2; i++){
        let temp = compression(i, s.slice(), "");
        
        if( answer > temp){
            answer = temp;
        }
    }

    return answer;
}