import { openModal } from '../util/modal.js';

export function createDeletionModal(event, employee) {
	const right = window.innerWidth - event.clientX + 'px';
	const top = event.clientY + 'px';
	const delModal = document.createElement('div');

	delModal.className = 'deletion-modal';
	delModal.innerHTML = `
	<form action="http://localhost:8000/employee/deleteEmployee/${employee.id}" method="POST">
		<button class="button__close material-icons">close</button>

		<div class="message"> Confirm deletion of <a class="employee">${employee.name}</a></div>

		<input class="modal__input button__delete" type="submit" value="Yes">
	</form>
    `;

	delModal.style.position = 'fixed';
	delModal.style.top = top;
	delModal.style.right = right;

	openModal({ node: delModal });
}
