const s = "3people unFollowed me";

console.log(solution(s));
function solution(s) {
    return s.toLowerCase().replace(/(?<!\w)[a-zA-Z]/g, (match)=>match.toUpperCase() );
}