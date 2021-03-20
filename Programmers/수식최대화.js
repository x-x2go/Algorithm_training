const expression = "100-200*300-500+20";

console.log(solution(expression));
function solution(expression) {
    const cases = [
        ['*', '+', '-'], ['*', '-', '+'], ['+', '*', '-'],
        ['+', '-', '*'], ['-', '+', '*'], ['-', '*', '+'],
      ];

    const computation = {
        '+': (a, b) => a + b + '',
        '-': (a, b) => a - b  + '',
        '*': (a, b) => a * b + '',
      }

    return cases.reduce((max, ops)=>{
        let total = expression;
        ops.forEach(op=>{
            const regex = new RegExp('(?<!\\d)(-?\\d+)\\' +op+ '(-?\\d+)');
            while(regex.test(total)){
                total = total.replace(regex, (match, p1, p2)=>computation[op](Number(p1), Number(p2)))
            }
        })
        return Math.abs(+total) > max ? Math.abs(+total) : max;
    }, 0);
}