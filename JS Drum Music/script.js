

    function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"`)
    if(!audio) return;
    audio.currentTime=0; // start the sound from the beginning
    audio.play();
    key.classList.add('playing')
  };


/* 
    The function  below waits(when added to the eventListener 'transitionend)
    until the transition ends and after that if the propertyName is equal to transform
    then it removes the class playing
*/

function removeTransition(e) {
  if(e.propertyName !== "transform")
    return;// skip it if it is not a transform
  this.classList.remove('playing')
}
  const keys=document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition) );

  window.addEventListener('keydown', playSound);