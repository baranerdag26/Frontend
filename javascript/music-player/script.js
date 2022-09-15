class Song{
    constructor(artist,songName,duration,pic) {
        this.artist = artist;
        this.songName = songName;
        this.duration = duration;
        this.pic = pic;
    }
}

let song1 = new Song("Barış Manço","Gülpembe",5.12,"gülpembe.jfif");
let song2 = new Song("Cem Karaca","Tamirci Çırağı",5.21,"tamirci.jfif");
let song3 = new Song("Murat Kekilli","Unutamam",5.21,"unutamam.jfif");


let songList = [song1,song2,song3];

console.log(song1.songName);

console.log(songList.length,"songlistteyim");

let songNum = songList.length;
let songIndex = 0;



let query = 
`
<div class="card mx-auto my-auto shadow-lg" style="width: 20rem;">
                        <img src="img/${songList[songIndex].pic}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h4 class="card-title text-center">${songList[songIndex].songName}</h4>
                            <h5 class="text-center m-3">${songList[songIndex].artist}</h5>
                            <p class="card-text mt-3 border-top border-dark pt-2 pb-1 px-2 text-center">
                                <audio id="songAudio">
                                    <source src="audio/${songList[songIndex].songName}.mp3" type="audio/mp3">
                                </audio>
                                
                                <button id = "prevBtn" onclick="prevSong()" type="button" class="mt-2 btn btn-primary rounded-5"><i class="fa-solid fa-backward-step"></i></button>
                                
                                <button id = "playBtn" onclick="playSong()" type="button" class="mt-2 btn btn-primary rounded-5"><i class="fa-solid fa-play"></i></button>
                                <button id = "pauseBtn" onclick="pauseSong()" type="button" class="mt-2 btn btn-primary rounded-5 toHide"><i class="fa-solid fa-pause"></i></button>

                                <button id = "nextBtn" onclick="nextSong()" type="button" class="mt-2 btn btn-primary rounded-5"><i class="fa-solid fa-forward-step"></i></button>

                                <input type="range">

                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  buraya da bakıcaz
                                </button>
                                <ul class="dropdown-menu w-100">
                                  <li><a class="dropdown-item" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                              </div>
                        </div>
                </div>
` ;

document.querySelector(".mycolumn").innerHTML = query;


function playSong(){
    console.log("play");
    document.getElementById("songAudio").play();
    document.getElementById("playBtn").classList.add("toHide");
    document.getElementById("pauseBtn").classList.remove("toHide");
    
}

function pauseSong(){
    
    document.getElementById("songAudio").pause();
    document.getElementById("playBtn").classList.remove("toHide");
    document.getElementById("pauseBtn").classList.add("toHide");
    
}

function prevSong(){
    if(songIndex==0){
        songIndex = songList.length - 1;
        document.querySelector(".card-title").innerHTML = songList[songIndex].songName;
        document.querySelector("h5").innerHTML = songList[songIndex].artist;
        let myimg = "img/" + songList[songIndex].pic;
        document.querySelector("img").src = myimg ;
        let songToBePlayed = "audio/" + songList[songIndex].songName + ".mp3";
        document.getElementById("songAudio").setAttribute('src', songToBePlayed);
        playSong();
    }
    else{
        songIndex--;
        document.querySelector(".card-title").innerHTML = songList[songIndex].songName;
        document.querySelector("h5").innerHTML = songList[songIndex].artist;
        let myimg = "img/" + songList[songIndex].pic;
        document.querySelector("img").src = myimg ;
        let songToBePlayed = "audio/" + songList[songIndex].songName + ".mp3";
        document.getElementById("songAudio").setAttribute('src', songToBePlayed);
        playSong();
    }
}

function nextSong(){
    if(songIndex==songList.length - 1){
        songIndex = 0;
        document.querySelector(".card-title").innerHTML = songList[songIndex].songName;
        document.querySelector("h5").innerHTML = songList[songIndex].artist;
        let myimg = "img/" + songList[songIndex].pic;
        document.querySelector("img").src = myimg ;
        let songToBePlayed = "audio/" + songList[songIndex].songName + ".mp3";
        document.getElementById("songAudio").setAttribute('src', songToBePlayed);
        playSong();
    }
    else{
        songIndex++;
        document.querySelector(".card-title").innerHTML = songList[songIndex].songName;
        document.querySelector("h5").innerHTML = songList[songIndex].artist;
        let myimg = "img/" + songList[songIndex].pic;
        document.querySelector("img").src = myimg ;
        let songToBePlayed = "audio/" + songList[songIndex].songName + ".mp3";
        document.getElementById("songAudio").setAttribute('src', songToBePlayed);
        playSong();
    }
}



