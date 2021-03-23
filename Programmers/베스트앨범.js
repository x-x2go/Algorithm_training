
const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
function solution(genres, plays) {
    let totalPlays = {};
    let bestsong = {};

    const selectBestSong = (song_list, index, cnt) => {
        if(!song_list) return [[index, cnt]];

        let i;
        for(i = 0; i < song_list.length; i++){
            if(song_list[i][1] < cnt) break;
        }
        song_list.splice(i, 0, [index, cnt]);
        return song_list.slice(0, 2);
    }

    genres.forEach((genre, i)=>{
        const cnt = totalPlays[genre] || 0;
        totalPlays[genre] = cnt + plays[i];
        bestsong[genre] = selectBestSong(bestsong[genre], i, plays[i]);
    })

    return Object.entries(totalPlays).sort((a,b)=>b[1] - a[1]).reduce((album,[genre, _])=>{
        const track = bestsong[genre].map(x=>x[0]);
        return album.concat(track);
    },[]);
}