// Utilizes onmouseover and onmouseout events, makes images larger and resets them when mouseover status is over
function imageEnlarge(x) {
    x.style.height="70px";
    x.style.width="40px";
    }
   function imageReset(x) {
   
    x.style.height="40px";
    x.style.width="30px";
    }

function imageEnlargeGun(x) {
    x.style.height="20px";
    x.style.width="58px";
}
function imageResetGun(x) {
    x.style.height="10px";
    x.style.width="38px";
}

function imageEnlargeGun2(x) {
    x.style.height="35px";
    x.style.width="60px";
}

function imageResetGun2(x) {
    x.style.height="25px";
    x.style.width="40px";
}

function imageEnlargeGun3(x) {
    x.style.height="25px";
    x.style.width="70px";
}

function imageResetGun3(x) {
    x.style.height="15px";
    x.style.width="50px";
}

function imageEnlargeGun4(x) {
    x.style.height="30px";
    x.style.width="80px";
}

function imageResetGun4(x) {
    x.style.height="20px";
    x.style.width="50px";
}

function imageEnlargeMagnum(x) {
    x.style.height="35px";
    x.style.width="70px";
}

function imageResetMagnum(x) {
    x.style.height="25px";
    x.style.width="50px";
}
    
    // Makes the three buttons present work appropriately, onclick
$(document).ready(function() {    
$('.btn').on('click', function() {
    $('.grp').hide();
    switch ($(this).attr('name')) {
        case 'armorCase':
            $('#armor').show();
            break;
        case 'gunsCase':
            $('#guns').show();
            break;
        case 'bowsCase':
            $('#bows').show();
            break;
        case 'repeatersCase':
            $('#repeaters').show();
            break;
        case 'launchersCase':
            $('#launchers').show();
            break;
        default:
            $('#armor').show();
    }
});
});

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
  
// Click events that lead to .gifs
function clickVortex() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/c/ce/Vortex_armor_%28demo%29.gif")
}

function clickTitanium() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/6/6c/Titanium_armour_set_bonus.gif");
}

function clickAdamantite() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/1/15/Adamantite_armor_pulse.gif");
}

function clickHallowed() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/0/0f/Holy_Protection_%28demo%29.gif");
}

function clickChlorophyte() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/d/dd/Chlorophyte_armor_%28demo%29.gif");
}

function clickBlowpipe() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/b/bb/Blowpipe_%28demo%29.gif");
}

function clickBlowgun() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/8/8e/Blowgun_%28demo%29.gif");
}

function clickCandyCorn() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/4/47/Candy_Corn_Rifle_%28demo%29.gif");
}

function clickChainGun() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/6/6d/Chain_Gun_%28demo%29.gif");
}

function clickMiniShark() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/e/e8/Minishark_%28demo%29.gif");
}

function clickMegaShark() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/4/43/Megashark_%28demo%29.gif");
}

function clickGatligator() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/2/2c/Gatligator_%28demo%29.gif");
}

function clickPaintballGun() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/f/ff/Paintball_Gun_%28demo%29.gif");
}

function clickClockWork() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/e/e5/Clockwork_Assault_Rifle_%28demo%29.gif");
}

function clickCoinGun() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/f/f1/Coin_Gun_%28demo%29.gif");
}

function clickFlameThrower() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/4/47/Flamethrower_%28demo%29.gif");
}

function clickVenusMagnum() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/d/db/Venus_Magnum_%28demo%29.gif");
}

function clickSniperRifle() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/6/6c/Sniper_Rifle_%28demo%29.gif");
}

function clickOnyxBlaster() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/2/28/Onyx_Blaster_%28demo%29.gif");
}

function clickSDMG() {
    window.open("https://static.wikia.nocookie.net/terraria_gamepedia/images/a/a0/S.D.M.G._%28demo%29.gif");
}