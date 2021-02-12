import { Avataaars } from "./avataaars.js";

const customColor = {
  accessories: {
    initial: "#f00",
    name: "accessoriesColor",
  },
  clothing: {
    initial: "#0f0",
    name: "clothingColor",
  },
  facialHair: {
    initial: "#00f",
    name: "facialHairColor",
  },
  skin: {
    initial: "#ff0",
    name: "skin",
  },
  top: {
    initial: "#0ff",
    name: "hairColor",
  },
};

const optionsWithBlank = {
  accessories: true,
  clothing: false,
  clothingGraphic: false,
  eyebrows: false,
  eyes: false,
  facialHair: false,
  mouth: false,
  nose: false,
  skin: false,
  top: true,
};

window.onload = () => {
  createAvatarModal();
};

function createAvatarModal() {
  const $modalBackground = createObject(
    "div",
    "avatarModalBackground",
    "avatarModal__background"
  );
  const $modal = createObject("div", "avatarModal", "avatarModal");

  const $closeButton = createObject("button", "avatarModalClose", "avatarModal__close material-icons");
  $closeButton.innerHTML = 'cancel';
  $modal.appendChild($closeButton);

  const $image = createObject("div", "avatarModalImage", "avatarModal__image");
  $image.innerHTML = Avataaars.create({ widdth: 300, height: 300 });
  $modal.appendChild($image);

  let $select = '<select name="avatarOptions" id="avatarOptions">';
  Object.keys(Avataaars.paths).forEach((option) => {
    $select += `<option value="${option}">${option}</option>`;
  });
  $select += "</select>";
  $modal.innerHTML += $select;

  const $results = createObject(
    "div",
    "avatarModalResults",
    "avatarModal__results"
  );
  $modal.appendChild($results);

  const $colors = createObject(
    "div",
    "avatarModalColors",
    "avatarModal__colors"
  );
  $modal.appendChild($colors);

  $modalBackground.append($modal);
  document.getElementById("employee").appendChild($modalBackground);

  printResults(Object.keys(Avataaars.paths)[0]);
}

function createObject(type, id, className) {
  const $div = document.createElement(type);
  $div.setAttribute("id", id);
  $div.setAttribute("class", className);
  return $div;
}

function printResults(optionName) {
  if (optionsWithBlank[optionName]) {
    const options = {
      width: 100,
    };
    const $button = createObject(
      "button",
      optionName + "-blank",
      "avatarModal__results__button"
    );
    $button.innerHTML = Avataaars.create(options);
    document.getElementById("avatarModalResults").appendChild($button);
  }
  for (const type of Object.keys(Avataaars.paths[optionName])) {
    let options = {
      width: 100,
    };
    options[optionName] = type;
    const $button = createObject(
      "button",
      optionName + "-" + type,
      "avatarModal__results__button"
    );
    $button.innerHTML = Avataaars.create(options);
    document.getElementById("avatarModalResults").appendChild($button);
  }
  if (customColor[optionName] != undefined) {
    printColors(optionName);
  }
}

function printColors(optionName) {
  const propietyName = customColor[optionName].name;
  let colorsName = "palette";
  document.getElementById("avatarModalColors").innerHTML += `<p>Colors:</p>`;
  if (Avataaars.colors[propietyName] != undefined) {
    colorsName = propietyName;
  }

  const keys = Object.keys(Avataaars.colors[colorsName]);
  for (const colorName of keys) {
    const color = Avataaars.colors[colorsName][colorName];
    const $button = createObject(
      "button",
      colorName,
      "avatarModal__colors__button"
    );
    $button.setAttribute(
      "style",
      `background-color:${color};`
    );
    document.getElementById("avatarModalColors").appendChild($button);
  }
}
