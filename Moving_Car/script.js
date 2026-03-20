let audio;

function playSound() {
    if (!audio) {
        audio = document.createElement('audio');
        audio.src = 'sound.mp3';
        audio.loop = true;
        audio.play();
        
    }
}

