
const files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
console.log(solution(files));

function solution(files) {
    return files.sort((a, b) => {

       const headerA = a.match(/^\D+/)[0].toLowerCase();
       const headerB = b.match(/^\D+/)[0].toLowerCase();

       if (headerA < headerB) {
         return -1;
       }
       if (headerA > headerB ) {
         return 1;
       }

       const numberA = a.match(/\d+/)[0].replace(/^0+/, "");
       const numberB = b.match(/\d+/)[0].replace(/^0+/, "");

       return numberA - numberB;
   });
}