const menu = document.querySelector('.mobile-menu')
const menuItems = document.querySelectorAll('.icon-menu')
const openIcon = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close-icon')

function openMenu() {
  if (menu.classList.contains("open-menu")) {
    menu.classList.remove("open-menu");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    menu.classList.add("open-menu");
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
};

openIcon.addEventListener('click', openMenu);

menuItems.forEach(
  (e) => {
    e.addEventListener('click', openMenu);
  },
);
