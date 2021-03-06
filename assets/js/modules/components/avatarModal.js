import { Avataaars } from "../library/avataaars.js";
import { Avatar } from "../avatar/Avatar.js";
import { addAvatarModalListeners, removeAvatarModalListeners } from "./avatarModalListeners.js";
import { CUSTOM_COLOR, OPTIONS_WITH_BLANK, MENU_TEXT } from "./avatarOptions.js";
import { openModal } from "../util/modal.js";

export function createAvatarModal(gender, properties, onClose = () => "") {
  const myAvatar = new Avatar(gender, properties);

  const $modal = document.createElement('div');
  $modal.className = 'avatarModal';
  $modal.id = 'avatarModal';
  $modal.innerHTML = `
        <button id="avatarModalClose" class="avatarModal__close material-icons">cancel</button>
        <div id="avatarModalImage" class="avatarModal__image"></div>
        <select name="avatarOptions" id="avatarOptions"> </select>
        <button id="avatarRandom__button"><i class="fas fa-random"></i></button>
        <div id="avatarModalResults" class="avatarModal__results"></div>
        <span class="avatarModal__colorTag">Color</span>
        <div id="avatarModalColors" class="avatarModal__colors"></div>
        <span class="avatarModal__hairColorTag">Hair color</span>
        <div id="avatarModalHairColors" class="avatarModal__hairColors"></div>
      `;

  printSelectOptions($modal);
  printMainAvatar($modal, myAvatar);
  printResults($modal, myAvatar, Object.keys(Avataaars.paths)[0]);
  printColors($modal, myAvatar, Object.keys(Avataaars.paths)[0]);

  const closeModal = openModal({
      node: $modal,
      onClose: function() {
        onClose(myAvatar.getProperties());
        removeAvatarModalListeners(closeModal);
      }
  })

  addAvatarModalListeners($modal, myAvatar, closeModal);
}

function printSelectOptions(node, modal) {
  const $select = node.querySelector("#avatarOptions");
  Object.keys(Avataaars.paths).forEach((option) => {
    if(option == 'nose') {
      return;
    }
    $select.innerHTML += `<option ${option=='clothingGraphic' ? 'hidden' : ''} value="${option}">${MENU_TEXT[option]}</option>`;
  });
}

export function printResults(node, myAvatar, optionName) {
  const avatarResults = node.querySelector("#avatarModalResults");
  let resultsHtml = "";

  if (OPTIONS_WITH_BLANK[optionName]) {
    resultsHtml += getAvatarMiniature(myAvatar, optionName, undefined);
  }

  if(optionName == 'skin') {
    resultsHtml += Object.keys(Avataaars.colors[optionName])
      .map(type => getAvatarMiniature(myAvatar, optionName, type)).join('')  
  } else {
    resultsHtml += Object.keys(Avataaars.paths[optionName])
      .map(type => getAvatarMiniature(myAvatar, optionName, type)).join('')
  }

  avatarResults.innerHTML = resultsHtml;

  function getAvatarMiniature(myAvatar, optionName, type) {
    const options = {
      width:100
    };
    options[optionName] = (type ? type : undefined);
    return `<button id="${
      optionName + "-" + (type ? type : 'none')
    }" class="avatarModal__results__button ${type === myAvatar.getProperty(optionName) ? 'selected' : ''}" 
      data-property="${optionName}" data-value="${type}"> ${myAvatar.getAvatar(options)} </button>`;
  }
}

export function printColors(node, myAvatar, optionName) {
  const colorResults = node.querySelector("#avatarModalColors");
  const hairColorsResults = node.querySelector("#avatarModalHairColors");
  const colorTag = node.querySelector('.avatarModal__colorTag');
  const hairColorTag = node.querySelector('.avatarModal__hairColorTag');

  if (CUSTOM_COLOR[optionName] != undefined && optionName != "facialHair" && optionName != "skin") {
    const propertyName = CUSTOM_COLOR[optionName].name;
    let colorPallete = "palette";
    colorResults.style.maxWidth = "86px";
    colorTag.style.opacity = 1;
    colorResults.innerHTML = ''
                
    if (Avataaars.colors[propertyName] != undefined) {
      colorPallete = propertyName;
    }

    printColorsInNode(colorPallete, colorResults, propertyName);
  } else {
    colorResults.style.maxWidth = "";
    colorTag.style.opacity = 0;  
  }

  if (optionName == "top" || optionName == "facialHair") {
    if (optionName == "top") {
      optionName = "hair";
    }
    const propertyName = CUSTOM_COLOR[optionName].name;
    hairColorsResults.innerHTML = ``;
    hairColorsResults.style.maxWidth = "86px";
    hairColorTag.style.opacity = 1;
    printColorsInNode("hair", hairColorsResults, propertyName);
  } else {
    hairColorsResults.style.maxWidth = "";
    hairColorTag.style.opacity = 0;
  }

  function printColorsInNode(colorPallete, node, propertyName) {
    const currentValue = myAvatar.getProperty(propertyName);
    const colors = Object.keys(Avataaars.colors[colorPallete]);

    let colorsHTML = "";

    colorsHTML += '<div class="colors-container">'
    for (const colorName of colors) {
      const color = Avataaars.colors[colorPallete][colorName];
      const $button = `<button id="${colorName}" class="avatarModal__colors__button ${currentValue==colorName ? 'selected': ''}" style="background-color:${color};" data-property="${propertyName}" data-value="${colorName}"></button>`;
      colorsHTML += $button;
    }
    colorsHTML += '</div>'
    node.innerHTML += colorsHTML
  }
}

export function printMainAvatar(node, myAvatar) {
  if(myAvatar.getProperty('clothing') != 'graphicShirt') {
    node.querySelector('#avatarOptions option[value="clothingGraphic"]').setAttribute('hidden', true);
  } else {
    node.querySelector('#avatarOptions option[value="clothingGraphic"]').removeAttribute('hidden');
  }

  const mainAvatar = myAvatar.getAvatar({
    width: 300
  });
  node.querySelector("#avatarModalImage").innerHTML = mainAvatar
}
