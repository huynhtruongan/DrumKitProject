const btns = document.querySelectorAll(".drum");

const takeBgName = (x) => {
  const compuStyled = window.getComputedStyle(x);
  const bgImage = compuStyled.getPropertyValue("background-image");
  const bgNameMatch = bgImage.match(/\/([^/]+)\.png/);
  const bgName = bgNameMatch ? bgNameMatch[1] : null;
  return bgName;
};

const btnAnimate = (currentBtn) => {
  currentBtn.classList.add("pressed");
  setTimeout(function () {
    currentBtn.classList.remove("pressed");
  }, 100);
};
const audioCache = {};
btns.forEach((btn) => {
  const bgName = takeBgName(btn);
  audioCache[bgName] = new Audio(`sounds/${bgName}.mp3`);
});

function handleEvent(btn) {
  const bgName = takeBgName(btn);
  btnAnimate(btn);
  audioCache[bgName].play();
}

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    handleEvent(btn);
  });
  document.addEventListener("keydown", (event) => {
    if (btn.textContent == event.key) {
      handleEvent(btn);
    }
  });
});
