function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(key);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  // this.alert("pressed");
}
window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
