
const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skill_trees));

function solution(skill, skill_trees) {
    const regex = new RegExp(`[^${skill}]`, 'g');
    return skill_trees.reduce((cnt, x)=>{
        let check = x.replace(regex,"");
        if(skill.substring(0, check.length) === check) return cnt + 1;
        return cnt;
    },0);
}