let songIndex = 0;
let audio = new Audio('songs/song1.mp3');
let Play = document.getElementById('play');
let ProgressBar = document.getElementById('ProgressBar');
let songItems = Array.from(document.getElementsByClassName('cover'));
let songs = [
    {songName: "Distance Love", filePath: "songs/song1.mp3", coverPath: "images/cover1.jpg"},
    {songName: "Enemy", filePath: "songs/song2.mp3", coverPath: "images/cover2.jpg"},
    {songName: "Jachdi", filePath: "songs/song3.mp3", coverPath: "images/cover3.jpg"},
    {songName: "Intehaan", filePath: "songs/song4.mp3", coverPath: "images/cover4.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("name")[0].innerText = songs[i].songName; 
})

Play.addEventListener('click', ()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        Play.src="images/pausew.jpg";
    }
    else{
        audio.pause();
        Play.src="images/playw.png";
    }
})
ProgressBar.addEventListener('change', ()=>{
    audio.currentTime = ProgressBar.value * audio.duration/100;
})
audio.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audio.currentTime/audio.duration)* 100); 
    console.log(audio.currentTime);
    console.log(audio.duration);
    ProgressBar.value = progress;
})

Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        songIndex = parseInt(e.target.id);
        audio.src = `song${songIndex+1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        Play.src="pausew.jpg";
    })
})
