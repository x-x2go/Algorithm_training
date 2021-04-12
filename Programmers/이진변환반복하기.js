const s = "110010101001";

console.log(solution(s));

function solution(s) {

    let cnt = [ 0, 0];

    const convert = (str, len) => {
        if(len === 1) return;

        const c = str.replace(/0/g, "").length;
        cnt[0]++;
        cnt[1] += (len - c);

        const new_str = c.toString(2)+""
        convert(new_str, new_str.length);
    }
    convert(s, s.length);
    return cnt;

}