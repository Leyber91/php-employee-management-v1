import { deleteEmployee } from '../service/employee-service.js';
import { openModal } from '../util/modal.js';
import { updateTable } from './table.js';

export function createDeletionModal(event, employee) {
	const right = window.innerWidth - event.clientX + 'px';
	const top = event.clientY + 'px';

	const delModal = document.createElement('div');
	delModal.className = 'deletion-modal';
	delModal.innerHTML = `
    <button class="button__close material-icons">close</button>
    <div class="message"> Confirm deletion of <a class="employee">${employee.name}</a></div>
    <button class="modal__input button__delete">Yes</button>
    `;

	delModal.style.position = 'fixed';
	delModal.style.top = top;
	delModal.style.right = right;

	const closeModal = openModal({
		node: delModal
	});

	delModal.querySelector('.button__delete').addEventListener('click', () => {
		deleteEmployee(employee.id, updateTable);
		closeModal();
	});
}
