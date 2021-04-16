const s = "()}()(){"

console.log(solution(s));
function solution(s) {
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    const N = s.length;
    const isEmpty = arr => arr.length === 0;
    let result = 0;

    const checkRightBracket = str => {
        let cnt = 0;
        let stack = [];

        for(let i = 0; i < N; i++){
            if(brackets[str[i]]){
                stack.push(str[i]);
                continue;
            }

            if(isEmpty(stack)) return 0;
            if(str[i] !== brackets[stack.pop()]) return 0;
            if(isEmpty(stack)) cnt++;
        }

        return isEmpty(stack)? cnt : 0;
    }

    for(let i = 0; i < N; i++){
        const str = s.slice(i) + s.slice(0, i);
        result = checkRightBracket(str);
        if(result) break;
    }

    return result;
}