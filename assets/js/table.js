import { Grid, html } from 'https://unpkg.com/gridjs/dist/gridjs.production.es.min.js';

let config = {
	search: true,
	columns: [
		'Name',
		{
            name: 'Email',
            formatter: (_, row) => html(`
            <span>${row.cells[1].data}</span>
            <a href='mailto:${row.cells[1].data}' class="material-icons">email</a>`)
		},
		'Age',
		'Street',
		'City',
		'State',
		'Postal Code',
		'Phone Number',
	],
	server: {
		url: 'http://localhost/php-employee-management-v1/src/library/employeeController.php',
		then: (data) => data.map((employee) => [employee.name, employee.email, employee.age]),
	},
};

new Grid(config).render(document.getElementById('table-wrapper'));
