const menuIcon = document.querySelector(".menu-icon");
const hamburgerIcon = document.querySelector(".fa-solid");
const menuList = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("fa-bars");
    hamburgerIcon.classList.toggle("fa-xmark");
    menuList.classList.toggle("active");
});
