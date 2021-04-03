const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log(solution(clothes));
function solution(clothes) {
    let clothes_type = {};
    clothes.forEach(([name, type])=>{
        const cnt = clothes_type[type] || 0;
        clothes_type[type] = cnt + 1;
    })

    return Object.values(clothes_type).reduce((total,cnt) => total * (cnt + 1), 1) - 1;
}