import { updateEmployee } from '../service/employee-service.js';
import { openModal } from '../util/modal.js';

export function createEditModal(employee) {
	const editModal = document.createElement('div');
	editModal.className = 'add-modal centered-modal';
	editModal.innerHTML = `
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
                <input min=10 max=100 type="number" name="age" class="modal__input" value='${
					employee['age'] != null ? employee['age'] : ''
				}'>
            </div>
            <div class="labeled-input">
                <label for="gender">Gender</label>
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
                <input type="phone" name="phoneNumber" class="modal__input" value='${
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
        <input value="Update" type="submit" name="submit" class="modal__input">
    </form>
    `;

	const closeModal = openModal({
		node: editModal,
	});

	editModal.querySelector('form').addEventListener('submit', (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		formData.append('id', employee.id);
		const value = Object.fromEntries(formData.entries());
		updateEmployee(value, closeModal);
	});
}
