const burgerButton = document.getElementsByClassName("burger-button")[0];
const navLink = document.getElementsByClassName("nav-links")[0];

burgerButton.addEventListener("click", () => {
  toggleNav();
  toggleBurgeButton();
});

function toggleNav() {
  navLink.classList.toggle("active");
}

function toggleBurgeButton() {
  burgerButton.classList.toggle("active");
}
