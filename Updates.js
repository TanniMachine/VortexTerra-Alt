// Functions for onfocus and onblur events
function fieldShadow(x) {
    x.style.boxShadow = '0 0 30px rgb(251, 255, 0)';
}

function fieldShadowBlur(x) {
    x.style.boxShadow = 'none';
}

// Functions for onkeydown and onkeyup events

function keyDown() {
    document.getElementById("gunQuestion").style.backgroundColor = "rgba(240,240,240, 0.8)";
}

function keyUp() {
    document.getElementById("gunQuestion").style.backgroundColor = "rgba(255,255,255, 0.8)";
}

function keyUp2() {
    document.getElementById("gunQuestion2").style.backgroundColor = "rgba(255,255,255, 0.8)";
}

// KeyPress Event Function, on 2nd text box

function keyPress() {
    document.getElementById("gunQuestion2").style.backgroundColor = "rgba(100, 128, 201)";
}

// Music Toggle
function toggleSound() {
    var audioElem = document.getElementById('audio');
    if (audioElem.paused)
      audioElem.play();
    else
      audioElem.pause();
  }
  
  // Music Icon Toggle
  var box2 = document.getElementById('musicButton'),
  bool = true;
  
  box2.addEventListener('click', function(){
    if (bool) {
      document.getElementById("musicIcon").src = "Media/Icons/MusicOff.png";
      bool = false;
    } else {
      document.getElementById("musicIcon").src = "Media/Icons/MusicOn.png";
      bool = true;
    }
  });
  
  // Set Volume
  var audio = document.getElementById("audio");
  audio.volume = 0.5;