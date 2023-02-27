document.body.addEventListener('keyup', (event) =>{
    playsound(event.code.toLowerCase())
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }

});

function playsound(sound)  {
    let audioElement = document.querySelector(`#s_${sound}`);
    let KeyElement = document.querySelector(`div[data-key = "${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(KeyElement) {
        KeyElement.classList.add('active');
        
        setTimeout(() => {
            KeyElement.classList.remove('active');
        }, 200);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playsound(`key${songItem}`);    
        }, wait);

        wait += 270;
    }
}