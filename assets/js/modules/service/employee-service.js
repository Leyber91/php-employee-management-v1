export const EMPLOYEE_URL = 'http://localhost:8000/mvc/controllers/employeeController.php';

export function deleteEmployee(id, onSucess) {
	axios
		.delete(EMPLOYEE_URL, {
			params: {
				id: id,
			},
		})
		.then(onSucess);
}

export function addEmployee(employee, onSuccess) {
	axios.post(EMPLOYEE_URL, employee).then(onSuccess);
}

export function updateEmployee(employee, onSuccess) {
	axios.put(EMPLOYEE_URL, employee).then(onSuccess);
}
