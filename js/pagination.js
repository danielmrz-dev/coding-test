import { users } from "../script.js";
import { renderTable } from "./renderTable.js";

const btnPrevPage = document.querySelector(".prev-page");
const btnNextPage = document.querySelector(".next-page");
export function paginateTable(users, currentPage, itemsPerPage) {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedUsers = users.slice(startIndex, endIndex);
	renderTable(paginatedUsers);
}

export let currentPage = 1;

export const itemsPerPage = 5;
function updatePage(page) {
	currentPage = page;
	paginateTable(users, currentPage, itemsPerPage);
}

btnPrevPage.addEventListener("click", () => {
	if (currentPage > 1) {
		updatePage(currentPage - 1);
	}
});
btnNextPage.addEventListener("click", () => {
	if (currentPage < Math.ceil(users.length / itemsPerPage)) {
		updatePage(currentPage + 1);
	}
});
