export const AVATAR_URL = '../src/library/avatarController.php';

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
		.put(`http://localhost/php-employee-management-v1/src/library/avatarController.php?id=${id}`, {
			properties: avatarProps,
			employeeId: employeeId,
		})
		.then(onSuccess);
}
