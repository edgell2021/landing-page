// loop over sections to get each of data-nav attribute
const fragment = document.createDocumentFragment(),
  pageTop = document.getElementById("main-heading"),
  navCont = document.getElementById("navbar__list"),
  navLinks = document.getElementsByClassName("menu__link"),
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
    section.classList.remove("activeSection");
  }
  for (let navLink of navLinks) {
    navLink.classList.remove("activeNavLink");
  }
}

//click even on nav elements to scroll to section using  scrollIntoView() method
//based windowscroll - height on stack overflow(https://stackoverflow.com/questions/13614112/using-scrollintoview-with-a-fixed-position-header) used in lieu of scrollIntoView as better for mobile
navCont.addEventListener("click", function(event) {
  const sectionTarget = event.target.textContent.toLowerCase();
  createID = "#" + sectionTarget.replace(/\s+/g, "");
  scrollTo = document.querySelector(createID);
  window.scroll(0, scrollTo.offsetTop - navCont.offsetHeight);
  removeActiveClass();
  event.target.classList.add("activeNavLink");
  scrollTo.classList.add("activeSection");
});

//scroll to top of pagge with return button
const returnBtn = document.querySelector(".return-button");

returnBtn.addEventListener("click", function() {
  window.scroll(0, pageTop.offsetTop - navCont.offsetHeight);
});
