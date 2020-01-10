// loop over sections to get each of data-nav attribute
const fragment = document.createDocumentFragment(),
  navCont = document.getElementById("navbar__list"),
  sections = document.getElementsByTagName("section");

for (let section of sections) {
  const listItem = document.createElement("li");
  listItem.textContent = section.dataset.nav;
  listItem.classList.add("menu__link");
  fragment.appendChild(listItem);
}

navCont.appendChild(fragment);
