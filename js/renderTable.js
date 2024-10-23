import { showDetaildUserInfo } from "./showDetailedInfo.js";
import { table, modal } from "../script.js";
import { sortUsers } from "./sortUsers.js";

const paginator = document.querySelector(".pagination");
export function renderTable(users) {
	table.innerHTML = `
        <thead>
            <tr>
                <th>
                    <span>Name</span>
                    <button class="btn-sort-desc"> ⬇️ </button>
                    <button class="btn-sort-asc"> ⬆️ </button>
                </th>
                <th>
                    <span>Username</span>
                    <button class="btn-sort-desc"> ⬇️ </button>
                    <button class="btn-sort-asc"> ⬆️ </button>
                </th>
                <th>
                    <span>Email</span>
                    <button class="btn-sort-desc"> ⬇️ </button>
                    <button class="btn-sort-asc"> ⬆️ </button>
                </th>
                <th>
                    <span>Phone</span>
                    <button class="btn-sort-desc"> ⬇️ </button>
                    <button class="btn-sort-asc"> ⬆️ </button>
                </th>
                <th>
                    <span>City</span>
                    <button class="btn-sort-desc"> ⬇️ </button>
                    <button class="btn-sort-asc"> ⬆️ </button>
                </th>
                <th>
                    <span>Company</span>
                    <button class="btn-sort-desc"> ⬇️ </button>
                    <button class="btn-sort-asc"> ⬆️ </button>
                </th>
            </tr>
        </thead>
        <tbody class="dashboard__table-content"></tbody>
    `;

    sortUsers();

	const tableBody = table.querySelector("tbody");

	if (users.length > 0) {
        paginator.classList.remove("hidden");
		const fragment = document.createDocumentFragment();

		users.forEach((user) => {
			const row = document.createElement("tr");
			row.setAttribute("class", "table-row");
			row.setAttribute("id", user.id);
			row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address.city}</td>
                <td>${user.company.name}</td>
            `;
			fragment.appendChild(row);
			row.addEventListener("click", () => {
				modal.showModal();
				showDetaildUserInfo(user);
			});
		});

		tableBody.appendChild(fragment);
	} else {
		tableBody.innerHTML = `
            <tr>
                <td colspan="6">No users found</td>
            </tr>
        `;
	}
}
