import { modal } from "../script.js";

export function showDetaildUserInfo(user) {
	const userID = modal.querySelector(".user-id");
	const userName = modal.querySelector(".user-name");
	const userUserName = modal.querySelector(".user-username");
	const userEmail = modal.querySelector(".user-email");
	const userAddress = modal.querySelector(".user-address");
	const userPhone = modal.querySelector(".user-phone");
	const userWebsite = modal.querySelector(".user-website");
	const userCompany = modal.querySelector(".user-company");
	const userCompanyCatchPhrase = modal.querySelector(".user-company-catch-phrase");
	const userCompanyBs = modal.querySelector(".user-company-bs");

	userID.textContent = user.id;
	userName.textContent = user.name;
	userUserName.textContent = user.username;
	userEmail.textContent = user.email;
	userAddress.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} (Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng})`;
	userPhone.textContent = user.phone;
	userWebsite.textContent = user.website;
	userCompany.textContent = user.company.name;
	userCompanyCatchPhrase.textContent = user.company.catchPhrase;
	userCompanyBs.textContent = user.company.bs;
}
