const p = "()))((()";
const n = "";

console.log(solution(n));

function solution(p) {

    const getBalancedString = str => {

        let check = 0;
        let checkRight = true;

        for(let i = 0; i < str.length; i++){
            str[i] ==="(" ? check += 1 : check -= 1;
            if(check < 0) checkRight = false;
            if(check === 0) return [i + 1, checkRight];
        }
    }

    const getReverse = str => str.slice(1, str.length - 1).map(x=> x === ")" ? "(" : ")").join("");

    const makeRightString = str => {
        if (str.length === 0) return "";

        const result = getBalancedString(str);
        const u = str.split("").splice(0, result[0]);
        const v = str.slice(result[0]);

        if(result[1]) return u.join("") + makeRightString(v);

        return "(" + makeRightString(v) + ")" + getReverse(u)
    }

    return makeRightString(p);
    
}