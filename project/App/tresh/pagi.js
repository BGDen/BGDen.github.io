// #table td {
// 	padding: 10px;
// 	border: 1px solid black;
// }

// #pagination {
// 	display: flex;
// 	padding: 0;
// 	list-style-type: none;
// }
// #pagination li {
// 	margin-right: 5px;
// 	padding: 10px;
// 	border: 1px solid black;
// }
// #pagination li:hover, #pagination li.active {
// 	cursor: pointer;
// 	color: red;
// 	border: 1px solid red;
// }

// <table id="table"></table>
// <ul id="pagination"></ul>

let users = [
	{name: 'name1',  surname: 'surname1',  age: 30}, // arrCards
	{name: 'name2',  surname: 'surname2',  age: 30},
	{name: 'name3',  surname: 'surname3',  age: 30},
	{name: 'name4',  surname: 'surname4',  age: 30},
	{name: 'name5',  surname: 'surname5',  age: 30},
	{name: 'name6',  surname: 'surname6',  age: 30},
	{name: 'name7',  surname: 'surname7',  age: 30},
	{name: 'name8',  surname: 'surname8',  age: 30},
	{name: 'name9',  surname: 'surname9',  age: 30},
	{name: 'name10', surname: 'surname10', age: 30},
	{name: 'name11', surname: 'surname11', age: 30},
	{name: 'name12', surname: 'surname12', age: 30},
	{name: 'name13', surname: 'surname13', age: 30},
];

let table = document.querySelector('#table'); // #products
let pagination = document.querySelector('#pagination'); // ul > li

let notesOnPage = 3;
let countOfItems = Math.ceil(users.length / notesOnPage); // +++

let showPage = (function() {
	let active;
	
	return function(item) {
		if (active) {
			active.classList.remove('active');
		}
		active = item;
		
		item.classList.add('active');
		
		let pageNum = +item.innerHTML;
		
		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;
		
		let notes = users.slice(start, end);
		
		table.innerHTML = '';///////////////////////////////////////
		for (let note of notes) {
			let tr = document.createElement('tr');
			table.appendChild(tr);
			
			createCell(note.name, tr);
			createCell(note.surname, tr);
			createCell(note.age, tr);
		}
	};
}());

let items = [];
for (let i = 1; i <= countOfItems; i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
	pagination.appendChild(li);
	items.push(li);
}

showPage(items[0]);

for (let item of items) {
	item.addEventListener('click', function() {
		showPage(this);
	});
}

function createCell(text, tr) {////////////////////////////////
	let td = document.createElement('td');
	td.innerHTML = text;
	tr.appendChild(td);
}
// http://code.mu/ru/javascript/video/implementation-of-pagination-in-javascript/#top