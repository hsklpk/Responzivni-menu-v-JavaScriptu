const menuIcon = document.querySelector(".menu-icon");
// console.log(menuIcon);
const menuList = document.querySelector("nav");
// console.log(menuList);
const hamburgerIcon = document.querySelector(".fa-solid");
// console.log(hamburgerIcon.classList);

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
});
