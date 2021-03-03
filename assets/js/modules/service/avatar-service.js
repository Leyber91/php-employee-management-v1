export const AVATAR_URL = 'http://localhost:8000/avatar/createAvatar';

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
		.put(`http://localhost:8000/avatar/updateAvatar/${id}`, {
			properties: avatarProps,
			employeeId: employeeId,
		})
		.then(onSuccess);
}
