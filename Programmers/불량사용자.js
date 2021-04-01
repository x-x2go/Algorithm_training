
const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
const banned_id = ["*rodo", "*rodo", "******"];

console.log(solution(user_id, banned_id));

function solution(user_id, banned_id) {
    let id_list = []; /* user_id 조합 */
    let banID_set = new Set(); /* banned_id 조합 */

    const combination = (arr, cnt, index, set) => {
        if(index > arr.length) return;
        if (cnt === 0) id_list.push(set);
        else{
            combination(arr, cnt - 1, index + 1, [...set, arr[index]]);
            combination(arr, cnt, index + 1, set);
        }
    }

    const permutation = (arr, set) => {
        if (arr.length === 0) {
            banID_set.add(set)
        } else {
          for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permutation(curr.slice(), set.concat(next))
         }
       }
    }

    const matchId = (ids, banIDs) => {
        for(let j = 0; j < ids.length; j++){
            const regex = new RegExp("^"+banIDs[j]+"$");
            if(!regex.test(ids[j])) return false;
        }
        return true;
    }

    permutation(banned_id.map(id=>id.replace(/\*/g,".")), []);
    combination(user_id, banned_id.length, 0, []);

    const banID_list = [...banID_set];

    return id_list.filter(ids=>{
        for(let i = 0; i < banID_list.length; i++){
            if(matchId(ids, banID_list[i])) return true;
        }
        return false;

    }).length;
}