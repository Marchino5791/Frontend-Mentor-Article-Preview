const menuElement = document.getElementById("menu");
const menuButtonElement = document.getElementById("menuButton");
const menuButtonArrowElement = document.getElementById("menuButtonArrow");

function menuFunction() {

  if (menuElement.className === "text-box__info__share__menu" && menuButtonElement.className === "text-box__info__share") {
    menuElement.classList.add("show");
    // menuButtonElement.classList.add("focus");
    menuButtonArrowElement.classList.add("focus");
  } else {
    menuElement.classList.remove("show");
    // menuButtonElement.classList.remove("focus");
    menuButtonArrowElement.classList.remove("focus");
  }

}
