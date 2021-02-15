import { Avataaars } from './avataaars.js';
import { colorProperties } from './avatarOptions.js';
import { DEF, FEMALE_DEF, MALE_DEF } from './default.js';

export class Avatar {

	constructor(gender = 'male') {
		if (gender == 'male') {
			this.properties = MALE_DEF;
		} else if (gender == 'female') {
			this.properties = FEMALE_DEF;
		} else {
			this.properties = DEF;
		}
	}

	getAvatar = (properties = {}) => {
		let newProperties = {...this.properties}
		Object.entries(properties).forEach(([key, value]) => newProperties[key] = value)
		return Avataaars.create(newProperties);
	}

	getProperty = (optionName) => {
		return this.properties[optionName];
	}

	changeProperty = (propertyName, value) => {
		if (value != 'null') {
			this.properties[propertyName] = value;
		} else {
			delete this.properties[propertyName];
		}
	};

	randomize = () => {
		for(const property in this.properties) {
			if(Avataaars.paths[property]) {
				const availableOptions = Object.keys(Avataaars.paths[property]);
				const randomIndex = getRandomInt(0, availableOptions.length-1);
				this.properties[property] = availableOptions[randomIndex];
			}
			if(colorProperties[property]) {
				const availableOptions = Object.keys(Avataaars.colors[colorProperties[property]]);
				const randomIndex = getRandomInt(0, availableOptions.length-1);
				this.properties[property] = availableOptions[randomIndex];
			}
		}

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
	}
}
