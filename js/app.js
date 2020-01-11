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

//remove active class form all elements
function removeActiveClass() {
  for (let section of sections) {
    section.classList.remove("your-active-class");
  }
}

//click even on nav elements to scroll to section using  scrollIntoView() method
//located window scroll from stack overflow(https://stackoverflow.com/questions/13614112/using-scrollintoview-with-a-fixed-position-header) used in lieu of scrollIntoView as better for mobile
navCont.addEventListener("click", function(event) {
  const sectionTarget = event.target.textContent.toLowerCase();
  createID = "#" + sectionTarget.replace(/\s+/g, "");
  scrollTo = document.querySelector(createID);
  window.scroll(0, scrollTo.offsetTop - navCont.offsetHeight);
  removeActiveClass();
  scrollTo.classList.add("your-active-class");
});
