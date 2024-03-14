const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const main = document.querySelector("welcome");
const hamburgerIcon = document.querySelector(".fa-solid");
const hamburgerIconClasses = hamburgerIcon.classList;

menuIcon.addEventListener("click", () => {
    if (hamburgerIconClasses.contains("fa-bars")) {
        hamburgerIconClasses.toggle("fa-bars", "fa-xmark");
        menuList.style.width = "250px";
    } else {
        hamburgerIconClasses.toggle("fa-xmark", "fa-bars");
        menuList.style.width = "0";
    }
});
