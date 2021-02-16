import { addEmployee, deleteEmployee } from '../service/employee-service.js';
import { addAvatar } from '../service/avatar-service.js';
import { closeModal, openModal } from '../util/modal.js';
import { createAvatarModal } from './avatarModal.js';
import { updateTable } from './table.js';
import { Avatar } from '../avatar/Avatar.js';

export function createAddModal() {
	const addModal = document.createElement('div');
	addModal.className = 'add-modal centered-modal';
	const avatar = new Avatar('other');
	addModal.innerHTML = `
    <h3 class="modal-title">Add new employee</h3>
    <div class="modal-image" id="modal-image">${avatar.getAvatar({ width: 300 })}</div>
    <form action="http://localhost/php-employee-management-v1/src/library/employeeController.php" method="POST">
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
                <label for="age">Gender</label>
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
        <input type="submit" name="submit" class="modal__input">
    </form>
    `;

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

	const onAvatarModalClose = (avatarProps) => {
		avatar.setProperties(avatarProps);
		repaintAvatar();
	};

	addModal
		.querySelector('#modal-image')
		.addEventListener('click', () => createAvatarModal('other', avatar.getProperties(), onAvatarModalClose));

	function repaintAvatar() {
		document.querySelector('#modal-image').innerHTML = avatar.getAvatar({ width: 300 });
	}

	openModal({
		node: addModal
	});
}

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
	delModal.querySelector('.button__delete').addEventListener('click', () => {
		deleteEmployee(employee.id, updateTable);
		closeModal();
  });
  
  delModal.style.position = 'fixed';
  delModal.style.top = top;
  delModal.style.right = right;

	openModal({
		node: delModal
	});
}

export function createEditModal(employee) {
	const editModal = document.createElement('div');
	editModal.className = 'add-modal';
	editModal.innerHTML = `
  <h3 class="modal-title">Edit employee</h3>
  <form action="http://localhost/php-employee-management-v1/src/library/employeeController.php" method="PUT">
    <input type="text" name="name" required class="modal__input" value='${employee['id']}' style='display:none'>
      <div class="fields">
          <div class="labeled-input">
              <label for="name">Name</label>
              <input type="text" name="name" required class="modal__input" value='${employee['name']}'>
          </div>
          <div class="labeled-input">
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName" required class="modal__input" value='${employee['lastName']}'>
          </div>
          <div class="labeled-input">
              <label for="age">Age</label>
              <input min=10 max=100 type="number" name="age" required class="modal__input" value='${
					employee['age'] != null ? employee['age'] : ''
				}'>
          </div>
          <div class="labeled-input">
              <label for="age">Gender</label>
              <select type="select" name="gender" class="modal__input">
                  <option value="male" ${employee['gender'] == 'male' ? 'selected' : ''}>Male</option>
                  <option value="female" ${employee['gender'] == 'female' ? 'selected' : ''}>Female</option>
                  <option value="other" ${employee['gender'] == 'other' ? 'selected' : ''}>Other</option>
              </select>
          </div>
      </div>
      <div class="fields">
          <div class="labeled-input">
              <label for="role">Role</label>
              <input type="text" name="role" required class="modal__input" value='${employee['role']}'>
          </div>
          <div class="labeled-input">
              <label for="email">Email</label>
              <input type="email" name="email" required class="modal__input" value='${employee['email']}'>
          </div>
          <div class="labeled-input">
              <label for="phoneNumber">Phone Number</label>
              <input type="phone" name="phoneNumber" required class="modal__input" value='${
					employee['phoneNumber'] != null ? employee['phoneNumber'] : ''
				}'>
          </div>
      </div>
      <div class="fields">
      <div class="labeled-input">
          <label for="city">City</label>
          <input type="text" name="city" class="modal__input" value='${employee['city']}'>
      </div>
      <div class="labeled-input">
          <label for="state">State</label>
          <input type="text" name="state" required class="modal__input" value='${employee['state']}'> 
      </div>
      <div class="labeled-input">
          <label for="country">Country</label>
          <input type="text" name="country" class="modal__input" value='${employee['country']}'>
      </div>
  </div>
      <label for="submit" hidden>Submit</label>
      <input type="submit" name="submit" class="modal__input">
  </form>
    `;
	editModal.querySelector('form').addEventListener('submit', (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		formData.append('id', employee.id);
		const value = Object.fromEntries(formData.entries());
		axios.put('../src/library/employeeController.php', value).then(closeModal);
	});

	openModal({
		node: editModal,
		classes: ['add-modal-container'],
		styles: {
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
		},
	});
}
