import { paginateTable, currentPage, itemsPerPage } from "./js/pagination.js";
import { renderTable } from "./js/renderTable.js";

export const searchInput = document.querySelector(".dashboard__search-input");
const fetchUsersBtn = document.querySelector(".dashboard__fetch-users-btn");
export const table = document.querySelector(".dashboard__table");
export const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");


export let users = [];

searchInput.addEventListener("keyup", (e) => {
	const inputValue = e.target.value.toLowerCase();
	const filteredUsers = users.filter((user) =>
		user.name.toLowerCase().includes(inputValue)
	);
	renderTable(filteredUsers);
});

fetchUsersBtn.addEventListener("click", (e) => {
	e.preventDefault();
	fetchUsers();
});

async function fetchUsers() {
	searchInput.value = "";
	try {
		const api = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!api.ok) {
			table.innerHTML = `<p class="error-message">Sorry, error while fetching the users.</p>`;
			throw new Error(`Failed to fetch users: ${api.status}`);
		}
		users = await api.json();
		paginateTable(users, currentPage, itemsPerPage);
		searchInput.focus();
	} catch (error) {
		console.log("Something went wrong:", error.message);
	}
}

closeModalBtn.addEventListener("click", () => {
	modal.close();
});
