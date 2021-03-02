export const AVATAR_URL = 'http://localhost:8000/mvc/controllers/avatar.php';

export function addAvatar(employeeId, avatarProps, onSuccess) {
	axios
		.post(
			AVATAR_URL,
			JSON.stringify({
				properties: avatarProps,
				employeeId: employeeId,
			})
		)
		.then(onSuccess);
}

export function updateAvatar(id, avatarProps, employeeId, onSuccess) {
	axios
		.put(`http://localhost/php-employee-management-v1/mvc/contollers/avatar.php?id=${id}`, {
			properties: avatarProps,
			employeeId: employeeId,
		})
		.then(onSuccess);
}
