import { addEmployee } from '../service/employee-service.js';
import { addAvatar } from '../service/avatar-service.js';
import { openModal } from '../util/modal.js';
import { createAvatarModal } from './avatarModal.js';
import { updateTable } from './table.js';
import { Avatar } from '../avatar/Avatar.js';

export function createAddModal() {
	const addModal = document.createElement('div');
	addModal.className = 'add-modal centered-modal';
	const avatar = new Avatar('other');
	addModal.innerHTML = `
    <div class="modal-image" id="modal-image">${avatar.getAvatar({ width: 300 })}</div>
    <form action="/mvc/contoller/employeeController.php" method="POST">
        <div class="fields">
            <div class="labeled-input">
                <label for="name">Name</label>
                <input type="text" name="name" required class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" required class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="age">Age</label>
                <input min=10 max=100 type="number" name="age" class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="gender">Gender</label>
                <select required type="select" name="gender" class="modal__input">
                    <option value="male">Male</option>                   
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>

        <div class="fields">
            <div class="labeled-input">
                <label for="role">Role</label>
                <input type="text" name="role" required class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="email">Email</label>
                <input type="email" name="email" required class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="phoneNumber">Phone Number</label>
                <input type="phone" name="phoneNumber" class="modal__input">
            </div>
        </div>
        <div class="fields">
            <div class="labeled-input">
                <label for="city">City</label>
                <input type="text" name="city" class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="state">State</label>
                <input type="text" name="state" class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="country">Country</label>
                <input type="text" name="country" class="modal__input">
            </div>
        </div>
        <div class="fields">
            <div class="labeled-input">
                <label for="githubLink">Github</label>
                <input type="text" name="githubLink" class="modal__input">
            </div>
            <div class="labeled-input">
                <label for="linkedinLink">Linkedin</label>
                <input type="text" name="linkedinLink" class="modal__input">
            </div>
        </div>
        <label for="submit" hidden>Submit</label>
        <input value="Create" type="submit" name="submit" class="modal__input">
    </form>
    `;

    const closeModal = openModal({
		node: addModal
	});

	const onAvatarModalClose = (avatarProps) => {
		avatar.setProperties(avatarProps);
		repaintAvatar();
	};

	addModal
		.querySelector('#modal-image')
        .addEventListener('click', () => createAvatarModal('other', avatar.getProperties(), onAvatarModalClose));
        
    addModal.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addEmployee(formData, (response) => {
            addAvatar(response.data.id, avatar.getProperties(), () => {
                closeModal();
                updateTable();
            });
        });
    });

	function repaintAvatar() {
		document.querySelector('#modal-image').innerHTML = avatar.getAvatar({ width: 300 });
	}


}
