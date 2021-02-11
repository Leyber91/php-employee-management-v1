import { deleteEmployee } from '../service/employee-service.js';
import { closeModal, openModal} from './modal.js'

export function createDeletionModal(event, employee) {
    const right = (window.innerWidth - event.clientX) + 'px';
    const top = (event.clientY) + 'px';

    openModal(innerDeletionModal({
        top: top,
        right: right
    }, employee))
}

const innerDeletionModal = (pos, employee) => {
    const delModal = document.createElement('div')
    delModal.className = 'deletion-modal'
    delModal.innerHTML = `
    <button class="button__close material-icons">close</button>
    <div class="message"> Confirm deletion of <a class="employee">${employee.name}</a></div>
    <button class="button__delete">Yes</button>
    `
    delModal.querySelector('.button__delete').addEventListener('click', () => {
        deleteEmployee(employee.id);
        closeModal()
    })

    return {
        node: delModal,
        classes: ['deletion-modal-container'],
        styles: {
            position: 'fixed',
            top: pos.top,
            right: pos.right
        }
    }
}