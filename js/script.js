let imgArtist = document.querySelector('.imgTrack img');
let nameTrack = document.querySelector('.textName');
let nameArtist = document.querySelector('.textArtist');
let barProgress = document.querySelector('input');
let curreTimeTrack = document.querySelector('.currentTime');
let durationTrack = document.querySelector('.duration');

let btnRepeat = document.getElementById('repeatTrack');
let btnPrevTrack = document.getElementById('prevTrack');
let btnPlayPause = document.getElementById('playPause');
let btnNextTrack = document.getElementById('nextTrack');
let btnListTrack = document.getElementById('listTrack');

let track = document.querySelector('audio');

let indeList = 0;


window.addEventListener('load', ()=>{
    loadingList(indeList);
});

function loadingList(indeList){
    imgArtist.src = `assets/img/${arrayFaixas[indeList].img}.jpg`;
    nameTrack.innerHTML = arrayFaixas[indeList].name;
    nameArtist.innerHTML = arrayFaixas[indeList].artista;
    track.src = `assets/music/${arrayFaixas[indeList].src}.mp3`;
}

function playPause(){
    if(track.paused){
        track.play();
        btnPlayPause.innerHTML = 'pause';
    } else {
        track.pause();
        btnPlayPause.innerHTML = 'play_circle_filled'
    }
}

function prevTrack() {
    indeList--;
    if(indeList < 0){
        indeList = 6;
    }
    loadingList(indeList);
    track.play();

    if(track.play){
        btnPlayPause.innerHTML = 'pause'
    }
}   

function nextTrack() {
    indeList++;
    if(indeList > 6){
        indeList = 0;
    }
    loadingList(indeList);
    track.play();
    if(track.play){
        btnPlayPause.innerHTML = 'pause'
    }
}

function repeatTrack() {
    let repeatTrackMusic = btnRepeat.innerText;

    switch(repeatTrackMusic){
        case'repeat':
            btnRepeat.innerText = 'repeat_one';
            break;
        case'repeat_one':
            btnRepeat.innerText = 'shuffle';
            break;
        case'shuffle':
            btnRepeat.innerText = 'repeat';
            break;
    }
}