import { printMainAvatar, printResults, printColors } from "./avatarModal.js";

let avatar;

export function avatarModalListeners(node, myAvatar) {
  avatar = myAvatar;
  generateRandomAvatarListener(node);
  changeAvatarOptionListener(node);
  changeAvatarPropertyListener(node);
  changeAvatarColorsListener(node);
  changeAvatarHairColorsListener(node);
}

function changeAvatarOptionListener(node) {
  const avatarOptions = node.querySelector("#avatarOptions");
  avatarOptions.addEventListener("change", function (event) {
    const $modal = document.querySelector("#avatarModal");
    printResults($modal, avatar, event.target.value);
    printColors($modal, avatar, event.target.value);
  });
}

function generateRandomAvatarListener(node) {
  const avatarOptions = node.querySelector("#avatarOptions");
  const randomButton = node.querySelector("#avatarRandom__button");
  randomButton.addEventListener("click", () => {
    const $modal = document.querySelector("#avatarModal");
    avatar.randomize();
    printMainAvatar($modal, avatar);
    printResults($modal, avatar, avatarOptions.value);
    printColors($modal, avatar, avatarOptions.value);
  })
}

function changeAvatarPropertyListener(node) {
  const avatarModalResults = node.querySelector("#avatarModalResults");
  avatarModalResults.addEventListener("click", changeMainAvatarPropertyByClick);
}

function changeAvatarColorsListener(node) {
  const avatarModalColors = node.querySelector("#avatarModalColors");
  avatarModalColors.addEventListener("click", changeMainAvatarPropertyByClick);
}

function changeAvatarHairColorsListener(node) {
  const avatarModalHairColors = node.querySelector(
    "#avatarModalHairColors"
  );
  avatarModalHairColors.addEventListener(
    "click",
    changeMainAvatarPropertyByClick
  );
}

function changeMainAvatarPropertyByClick(event) {
  const target = event.target;
  const $modal = document.querySelector("#avatarModal");
  const avatarOptions = document.getElementById("avatarOptions");
  if (
    target.classList.contains("avatarModal__colors__button") ||
    target.classList.contains("avatarModal__results__button")
  ) {
    const property = target.dataset.property;
    const value = target.dataset.value;
    avatar.changeProperty(property, value === 'undefined' ? undefined : value);
    printMainAvatar($modal, avatar);
    printResults($modal, avatar, avatarOptions.value);
    printColors($modal, avatar, avatarOptions.value);
  }
}
