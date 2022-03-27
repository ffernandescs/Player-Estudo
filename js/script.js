let imgTrack = document.querySelector('.imgTrack img')
let nameTrack = document.querySelector('.textName')
let nameArtistTrack = document.querySelector('.textArtist')
let barProgressTrack = document.querySelector('.slide input')
let currentTimeTrack = document.querySelector('.currentTime')
let durationTrack = document.querySelector('.duration')
let btnRepeat = document.getElementById('repeatTrack');
let btnPrevPlay = document.getElementById('prevTrack');
let btnNextPlay = document.getElementById('nextTrack');
let btnPlayPause = document.getElementById('playPause');
let btnListTrack = document.getElementById('listTrack');
let menuList =  document.querySelector('.listTrackMusic');
let fecharMenu = document.querySelector('.fecharMenu');



let track = document.querySelector('audio');

let indexList = 0;
let timer;

window.addEventListener('load', ()=>{
    loadingList(indexList);
})

function loadingList(indexList){
    imgTrack.src = `assets/img/${arrayFaixas[indexList].img}.jpg`
    track.src = `assets/music/${arrayFaixas[indexList].src}.mp3`
    nameTrack.innerHTML = arrayFaixas[indexList].name;
    nameArtistTrack.innerHTML = arrayFaixas[indexList].artista;
    timer = setInterval(timeProgress, 1000);

}

function playPause(){
    if(track.paused){
        track.play();
        btnPlayPause.textContent = 'pause'
    } else {
        track.pause();
        btnPlayPause.textContent = 'play_circle_filled'
    }
}

function prevTrack(){
    indexList--;
    if(indexList < 0){
        indexList = 6;
    }
    loadingList(indexList);
    track.play();
    btnPlayPause.textContent = 'pause';
};

function nextTrack(){
    indexList++;
    if(indexList > 6){
        indexList = 0;
    }
    loadingList(indexList);
    track.play();
    btnPlayPause.textContent = 'pause';
};

function timeProgress(){
    let position = 0;
    if(track.duration){
        position = track.currentTime * (100 / track.duration);
        barProgressTrack.value = position;
    }
};

barProgressTrack.addEventListener('click', (e)=>{
    let widthProgress = barProgressTrack.clientWidth;
    let offsetWidth = e.offsetX;
    let durationAudio = track.duration;

    track.currentTime = (offsetWidth / widthProgress) * durationAudio;
    track.play();
})

track.addEventListener('timeupdate', ()=>{
    let minCurrent = Math.floor(track.currentTime /60);
    let secCurrent = Math.floor(track.currentTime % 60);
    if(secCurrent < 10) {
        secCurrent = '0' + secCurrent;
    }
    currentTimeTrack.innerHTML = minCurrent + ':' + secCurrent;
});

track.addEventListener('loadeddata', ()=>{
    let durationReal = track.duration;
    let totalMin = Math.floor(durationReal / 60);
    let totalSeconds = Math.floor(durationReal % 60);
    if(totalSeconds < 10) {
        totalSeconds = '0' + totalSeconds;
    }
    
    durationTrack.innerHTML = totalMin + ':' + totalSeconds;
});  

function repeatTrack(){
    let repeatSwitch = btnRepeat.textContent;
        switch(repeatSwitch){
            case'repeat':
            btnRepeat.textContent = 'repeat_one';
            break;
            case'repeat_one':
            btnRepeat.textContent = 'shuffle';
            break;
            case'shuffle':
            btnRepeat.textContent = 'repeat';
            break;
        }
};

track.addEventListener('ended', ()=>{
    let repeatSwitch = btnRepeat.textContent;
    switch(repeatSwitch){
        case'repeat':
            nextTrack();
            break;
        case'repeat_one':
            track.currentTime = 0;
            track.play();
            break;
        case'shuffle':
            let aleatorioIndex = Math.floor((Math.random()* arrayFaixas.length) + 1);
            do{
                aleatorioIndex = Math.floor((Math.random()* arrayFaixas.length) + 1);
            }while (indexList == aleatorioIndex); 
            indexList = aleatorioIndex;
            loadingList(indexList);
            playPause();
            break;
    }
})

function listTrack(){
    menuList.style = 
    'opacity: 1;' +
    'display: block;' +
    'bottom: 0;' +
    'pointer-events: auto;'
    fecharMenu.style = 
    'z-index: 1;'
}

function closeList() {
    menuList.style = 
    'bottom: -55%;' 
    fecharMenu.style =
    'z-index: -1;'
}

fecharMenu.addEventListener('click', fecharList)

function fecharList() {
    closeList();
}


function colorBackground(){
    let barraColor = document.querySelector('.contCores');
    barraColor.style =
        'right: 0;'
}

function closeColor() {
    let barraColor = document.querySelector('.contCores');
    barraColor.style =
        'right: -100%;'
    
}

function btnBackground(){
    let containerBackground = document.querySelector('.container');
    containerBackground.style = 
    'background-image: radial-gradient(circle at 50% -20.71%, #de9c2c 0, #e5922a 8.33%, #ea852b 16.67%, #ee772d 25%, #f16731 33.33%, #f35436 41.67%, #f23c3c 50%, #f01843 58.33%, #ed004c 66.67%, #e90057 75%, #e30064 83.33%, #db0071 91.67%, #d10080 100%);';
    menuList.style = 
    'background-image: radial-gradient(circle at 50% -20.71%, #de9c2c 0, #e5922a 8.33%, #ea852b 16.67%, #ee772d 25%, #f16731 33.33%, #f35436 41.67%, #f23c3c 50%, #f01843 58.33%, #ed004c 66.67%, #e90057 75%, #e30064 83.33%, #db0071 91.67%, #d10080 100%);';
}