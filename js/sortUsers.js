import { users } from "../script.js";
import { currentPage, itemsPerPage, paginateTable } from "./pagination.js";

export function sortUsers() {
	const ascSortBtns = document.querySelectorAll(".btn-sort-asc");
	const descSortBtns = document.querySelectorAll(".btn-sort-desc");

	descSortBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const headerText = e.target
				.closest("th")
				.querySelector("span")
				.textContent.toLowerCase();
			switch (headerText) {
				case "name":
					users.sort((a, b) => a.name.localeCompare(b.name));
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "username":
					users.sort((a, b) => a.username.localeCompare(b.username));
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "email":
					users.sort((a, b) => a.email.localeCompare(b.email));
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "phone":
					users.sort((a, b) => {
						const phoneA = parseInt(a.phone.replace(/[^0-9]/g, ""));
						const phoneB = parseInt(b.phone.replace(/[^0-9]/g, ""));
						return phoneA - phoneB;
					});
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "city":
					users.sort((a, b) =>
						a.address.city.localeCompare(b.address.city)
					);
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "company":
					users.sort((a, b) =>
						a.company.name.localeCompare(b.company.name)
					);
					paginateTable(users, currentPage, itemsPerPage);
					break;

				default:
					break;
			}
		});
	});

	ascSortBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const headerText = e.target
				.closest("th")
				.querySelector("span")
				.textContent.toLowerCase();
			switch (headerText) {
				case "name":
					users.sort((a, b) => b.name.localeCompare(a.name));
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "username":
					users.sort((a, b) => b.username.localeCompare(a.username));
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "email":
					users.sort((a, b) => b.email.localeCompare(a.email));
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "phone":
					users.sort((a, b) => {
						const phoneA = parseInt(a.phone.replace(/[^0-9]/g, ""));
						const phoneB = parseInt(b.phone.replace(/[^0-9]/g, ""));
						return phoneB - phoneA;
					});
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "city":
					users.sort((a, b) =>
						b.address.city.localeCompare(a.address.city)
					);
					paginateTable(users, currentPage, itemsPerPage);
					break;
				case "company":
					users.sort((a, b) =>
						b.company.name.localeCompare(a.company.name)
					);
					paginateTable(users, currentPage, itemsPerPage);
					break;

				default:
					break;
			}
		});
	});
}
