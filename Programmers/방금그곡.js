const m = "CC#BCC#BCC#BCC#B";
const musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];

console.log(solution(m, musicinfos));
function solution(m, musicinfos) {

    const getMinutes = ([hours, min]) => hours * 60 + min * 1;
    const changeNote = song => song.replace(/(\D)#/g, (_, w)=>w.toLowerCase())
    const playing = ([start, end, title, mz]) => {
        const playtime = getMinutes(end.split(":")) - getMinutes(start.split(":"));
        const note = changeNote(mz);
        const len = note.length;

        return [title, note.repeat(Math.floor(playtime / len)) + note.slice(0, playtime % len)];
    }

    const samplenote = changeNote(m);
    let maxplaytime = 0;
    
    return musicinfos.map(info=>playing(info.split(","))).reduce((match, [title, music])=>{
        if(music.includes(samplenote)){
            if(music.length > maxplaytime){
                maxplaytime = music.length;
                return title;
            }
        }
        return match;
    }, "(None)");
    
}