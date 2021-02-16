import { printMainAvatar, printResults, printColors } from "./avatarModal.js";

let avatar;

export function addAvatarModalListeners(node, myAvatar, closeModal) {
  avatar = myAvatar;
  addGenerateRandomAvatarListener(node);
  addChangeAvatarOptionListener(node);
  addChangeAvatarPropertyListener(node);
  addChangeAvatarColorsListener(node);
  addChangeAvatarHairColorsListener(node);
  addCloseAvatarModalListener(node, closeModal);
}

export function removeAvatarModalListeners(closeModal) {
  const $node = document.querySelector('#avatarModal');
  $node.querySelector("#avatarRandom__button").addEventListener("click", generateRandomAvatar)
  $node.querySelector("#avatarOptions").removeEventListener("change", changeAvatarOption);
  $node.querySelector("#avatarModalResults").addEventListener("click", changeMainAvatarProperty);
  $node.querySelector("#avatarModalColors").addEventListener("click", changeMainAvatarProperty);
  $node.querySelector("#avatarModalHairColors").addEventListener("click",changeMainAvatarProperty);
  $node.querySelector("#avatarModalClose").addEventListener("click", closeModal);
}

function addGenerateRandomAvatarListener(node) {
  node.querySelector("#avatarRandom__button").addEventListener("click", generateRandomAvatar)
}

function generateRandomAvatar() {
  const $modal = document.querySelector("#avatarModal");
  const avatarOptions = document.querySelector("#avatarOptions");
  avatar.randomize();
  printMainAvatar($modal, avatar);
  printResults($modal, avatar, avatarOptions.value);
  printColors($modal, avatar, avatarOptions.value);
}

function addChangeAvatarOptionListener(node) {
  node.querySelector("#avatarOptions").addEventListener("change", changeAvatarOption);
}

function changeAvatarOption(event) {
  const $modal = document.querySelector("#avatarModal");
  printResults($modal, avatar, event.target.value);
  printColors($modal, avatar, event.target.value);
}

function addChangeAvatarPropertyListener(node) {
  node.querySelector("#avatarModalResults").addEventListener("click", changeMainAvatarProperty);
}

function addChangeAvatarColorsListener(node) {
  node.querySelector("#avatarModalColors").addEventListener("click", changeMainAvatarProperty);
}

function addChangeAvatarHairColorsListener(node) {
  node.querySelector("#avatarModalHairColors").addEventListener("click",changeMainAvatarProperty);
}

function changeMainAvatarProperty(event) {
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

function addCloseAvatarModalListener(node, closeModal) {
  node.querySelector("#avatarModalClose").addEventListener("click", closeModal);
}