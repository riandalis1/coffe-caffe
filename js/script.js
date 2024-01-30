// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Hilangkan Menu saat klik sembarang
const humberger = document.querySelector("#humberger-menu");
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});