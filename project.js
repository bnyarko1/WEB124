
// Benjamin Nyarko 10-26-2024 //
/* Adapted from Javascript30.com */
/* JavaScript Drum Kit */
/* New information:
expanded use of the event object
 arrow function 
 keyup, keydown, transitionEnd events 
 back-ticks , grave accent (template literals)
 play() method
 */
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
// Function to play sound on keydown
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
// Function to play sound on click 
function playSoundOnClick(e) {
   const keyCode = e.target.closest('.key').getAttribute('data-key'); 
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
   const key = e.target.closest('.key'); 
   if (!audio) return;
    key.classList.add('playing'); 
    audio.currentTime = 0; 
    audio.play();
   }


  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  keys.forEach(key => key.addEventListener('click', playSoundOnClick));
  