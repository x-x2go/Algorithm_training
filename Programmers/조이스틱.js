const name = "JEROEN";

/* 추가 조건 : 마지막 위치에서는 첫 번째 위치로 갈 수 없다고 가정  */
console.log(solution(name));

function solution(name) {
    let maxALength = 0;

    const changeAlphabet = letter => letter > 78 ?  91 - letter : letter - 65;
    const findConsecutiveA = (str, i) => {
        let cnt;
        for(cnt = 0; cnt < str.length; cnt++){
            if(str[cnt] !== "A") break;
        }
        return cnt - (i - 1) > maxALength ? cnt - (i - 1) : maxALength;
    }


    const totalMove = [...name].reduce((totalMove, letter, i)=>{
        if(letter !== "A") return totalMove + changeAlphabet(name.charCodeAt(i)) + 1;
        
        if(i === 0 || name[i - 1] !== "A"){
            maxALength = findConsecutiveA(name.slice(i), i);
        }
        return totalMove + 1;
        
    },0);
    
    return totalMove - maxALength - 1;
}

}