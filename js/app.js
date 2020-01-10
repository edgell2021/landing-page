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

//click even on nav elements to scroll to section using  scrollIntoView() method

navCont.addEventListener("click", function(event) {
  const sectionTarget = event.target.textContent.toLowerCase();
  createID = "#" + sectionTarget.replace(/\s+/g, "");
  scrollTo = document.querySelector(createID);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "end" });
});
