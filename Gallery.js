

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

  function clickDestroyer() {
    window.open("https://www.reddit.com/r/Terraria/comments/1snhkl/the_destroyer_painting/");
  }

  function clickTerrariaWorld() {
    window.open("https://www.deviantart.com/vsewolod/art/Terraria-World-730563825");
  }

  function clickInMyWay() {
    window.open("https://www.deviantart.com/neytirix/art/You-re-in-my-way-824959703");
  }

  function clickMoonLord() {
    window.open("https://forums.terraria.org/index.php?threads/terraria-and-chivalry-cross-over-fan-art-contest-submission-thread.40588/page-3#post-941716");
  }

  function clickSathoryn() {
    window.open("https://sathoryn.artstation.com/projects/m5D5E");
  }

  function clickMoonlordJake() {
    window.open("https://www.reddit.com/r/Terraria/comments/42n94u/moonlord_fanart/");
  }

  function clickBohrokkiBrain() {
    window.open("https://twitter.com/Bohrokki/status/1188427502823317504");
  }

  function clickBohrokkiSkeletron() {
    window.open("https://twitter.com/Bohrokki/status/1162011461427847170");
  }

  function clickGolem() {
    window.open("https://yacrical.tumblr.com/post/164599568458/golem-terraria-fan-art");
  }

  function clickWallofFlesh() {
    window.open("https://www.deviantart.com/samrausku/art/Wall-of-Flesh-710278285");
  }

  function clickLunaticCultist() {
    window.open("https://www.reddit.com/r/Terraria/comments/kh997f/fanart_supreme_lunatic_cultist_app_ibispaintx_art/");
  }

  function clickTheTwins() {
    window.open("https://www.deviantart.com/bohrokki/art/The-Twins-782567660");
  }

  function clickSpiderArmor() {
    window.open("https://www.deviantart.com/personatea/art/Terraria-Spider-Armor-603782738");
  }