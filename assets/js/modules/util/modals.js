import { deleteEmployee } from '../service/employee-service.js';
import { closeModal, openModal} from './modal.js'


export function createAddModal() {
    const addModal = document.createElement('div')
    addModal.className = 'add-modal'
    addModal.innerHTML = `
    <button class="button__close material-icons">close</button>
    <form>
        
    </form>
    <div class="message"> Confirm deletion of <a class="employee">werew</a></div>
    <button class="button__delete">Yes</button>
    `
    addModal.querySelector('.button__delete').addEventListener('click', () => {
        closeModal()
    })

    openModal({
        node: addModal,
        classes: ['add-modal-container'],
        styles: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }
    })
}

export function createDeletionModal(event, employee) {
    const right = (window.innerWidth - event.clientX) + 'px';
    const top = (event.clientY) + 'px';

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

    openModal({
        node: delModal,
        classes: ['deletion-modal-container'],
        styles: {
            position: 'fixed',
            top: top,
            right: right
        }
    })
}