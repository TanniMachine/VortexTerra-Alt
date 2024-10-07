// onload Event
document.getElementById("terrariaWeb").onload = function() {onLoad()};

function onLoad() {
  document.getElementById("p2").innerHTML = "If you want to learn more information about the Ranger Class, visit the official webpage (Right-Click <u>this</u> text to get the URL):";
}

// oncontextmenu Event
function onContextMenu() {
  alert("https://terraria.fandom.com/wiki/Guns");
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

// $('#MyContainer').load('Home-2.html'); This could be used in the future