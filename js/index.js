import {
  getLocaleStorage,
  openMenuPage,
  selectedPage,
  openRulesPage,
  setLocaleStorage,
  openPlayPage,
} from "./functions.js";

let form = document.form;
let nick = form.nick;
let scoreValue = 0;
const exit = document.getElementById("exit");
const rules = document.getElementById("rules");
const play = document.getElementById("play");
const buttonPlayExit = document.getElementById("playExit");
let flagPage = "menu";
document.getElementById("inputAnswer").addEventListener("mousewheel", function (e) {
  e.preventDefault();
});
document.getElementById("logo").addEventListener("click", (event) => {
  location.reload();
  return false;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nick = nick.value;
  let nickArr = nick.split("");
  if (nickArr.length < 3) {
    location.reload();
    return alert("Слишком короткий nick!");
  } else {
    if (localStorage.getItem(nick)) {
      scoreValue = getLocaleStorage(nick);
      document.getElementById("headerScore").innerHTML = getLocaleStorage(nick);
      openMenuPage();
    } else {
      setLocaleStorage(nick, scoreValue);
      openMenuPage();
    }
  }
});
exit.addEventListener("click", (event) => {
  location.reload();
});

rules.addEventListener("click", (event) => {
  if (!(flagPage === "rules")) {
    document.getElementsByClassName("content__cont")[0].innerHTML = "";
    openRulesPage();
    flagPage = "rules";
    selectedPage("rules");
  } else {
    document.getElementsByClassName("content__cont")[0].innerHTML = "";
    flagPage = "menu";
    selectedPage("menu");
  }
});

play.addEventListener("click", (event) => {
  if (!(flagPage === "play")) {
    document.getElementsByClassName("content__cont")[0].innerHTML = "";
    openPlayPage(nick);
    flagPage = "play";
    selectedPage("play");
  } else {
    document.getElementsByClassName("content__cont")[0].innerHTML = "";
    flagPage = "menu";
    selectedPage("menu");
  }
});

buttonPlayExit.addEventListener("click", (event) => {
  openMenuPage();
});

let audio = document.getElementById("audioOn");
let audioArr = [document.getElementById("wrongAudio"), document.getElementById("trueAudio")];
let audioFlag = "on";
audio.addEventListener("click", (event) => {
  if (audioFlag === "on") {
    audio.style.background = "url('./../../img/icons/volumeMuted.png')";
    console.log("muted");
    audioArr.forEach((audio) => {
      audio.muted = true;
    });
    audioFlag = "off";
  } else {
    audio.style.background = "url('./../../img/icons/volumeIcon.png')";
    audioFlag = "on";
    console.log("on");
    audioArr.forEach((audio) => {
      audio.muted = false;
    });
  }
});
