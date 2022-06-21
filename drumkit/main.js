var vi = document.defaultView
window.addEventListener('keydown', function(e){
    //return console.log(msg.code);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    console.log(key);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(e);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));