const dirs = "ULURRDLLU";

console.log(solution(dirs));
function solution(dirs) {
    //const move =  { U : [0, 1], D : [0, -1], L : [-1, 0], R : [1,0]} ;
    const move = {
        U: ([x, y]) => [x, y + 1],
        D: ([x, y]) => [x, y - 1],
        L: ([x, y]) => [x - 1, y],
        R: ([x, y]) => [x + 1, y]
    };

   let check = new Set();
   let now = [0,0];

   for(let i = 0; i < dirs.length; i++){
       let [nx, ny] = move[dirs[i]](now);

       if(nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
       
           check.add(""+ now[0] + now[1] + nx + ny);
           check.add(""+ nx + ny + now[0] + now[1]);

           now = [nx, ny];
   }

   return check.size / 2;
}