
let modalWrapper = null;

export function openModal(modal) {
	closeModal();
	modalWrapper = document.createElement('div');
	modalWrapper.className = 'modal-wrapper';

	modalWrapper.addEventListener('click', (event) => {
		if(event.target.classList.contains('modal-wrapper')) {
			closeModal();
		}
	})

	let modalContainer = document.createElement('div');
	modalContainer.className = 'modal-container';
	
	if(modal.classes) {
		modal.classes.forEach(className => {
			modalContainer.classList.add(className);
		})
	}
	if(modal.styles) {
		Object.entries(modal.styles).forEach(([key, value]) => {
			modalContainer.style[key] = value;
		});
	}

	modalContainer.appendChild(modal.node);
	modalWrapper.appendChild(modalContainer)
	document.body.appendChild(modalWrapper);
}

export function closeModal() {
	if(modalWrapper) {
		modalWrapper.remove();
	}
}
