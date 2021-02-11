import { Grid, html, h } from 'https://unpkg.com/gridjs/dist/gridjs.production.es.min.js';
import { EMPLOYEE_URL } from '../service/employee-service.js';
import { createDeletionModal } from '../util/modals.js';

const columns = [
	{
		id: 'id',
		hidden: true,
	},
	'Name',
	{
		name: 'Email',
		formatter: (_, row) =>
			html(`
				<span>${row.cells[2].data}</span>
				<a href='mailto:${row.cells[2].data}' class="material-icons">email</a>`),
	},
	'Age',
	'City',
	'State',
	'Phone Number',
	{
		id: 'delete',
		formatter: (_, row) =>
			h(
				'button',
				{
					className: 'material-icons',
					onClick: (event) =>
						createDeletionModal(event, {
							name: row.cells[1].data,
							id: row.cells[0].data,
						}),
				},
				'delete'
			),
		sort: false,
	},
];

const server = {
	url: EMPLOYEE_URL,
	then: (data) =>
		data.map((employee) => [
			employee.id,
			`${employee.name} ${employee.lastName}`,
			employee.email,
			employee.age,
			employee.city,
			employee.state,
			employee.phoneNumber,
		]),
};

const grid = new Grid({
	sort: true,
	pagination: true,
	fixedHeader: true,
	editing: true,
	columns: columns,
	server: server,
});

grid.render(document.getElementById('table-wrapper'));

grid.on('rowClick', (...args) => {
	if (!args[0].target.classList.contains('material-icons')) {
		//TODO Navigate to employees
		console.log(args);
	}
});

export function update() {
	grid.updateConfig({
		server: server,
	}).forceRender();
}
