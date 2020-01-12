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
  listItem.id = section.id + "listItem";
  fragment.appendChild(listItem);
}

navCont.appendChild(fragment);

//remove active class form all section
function removeActiveClass() {
  for (let section of sections) {
    section.classList.remove("activeSection");
  }
}

//remove active class form all nav elements
function removeActiveNavClass() {
  for (let navLink of navLinks) {
    navLink.classList.remove("activeNavLink");
  }
}

//click even on nav elements to scroll to section
//based windowscroll - height on stack overflow(https://stackoverflow.com/questions/13614112/using-scrollintoview-with-a-fixed-position-header) used in lieu of scrollIntoView as better for mobile
navCont.addEventListener("click", function(event) {
  const sectionTarget = event.target.textContent.toLowerCase();
  createID = "#" + sectionTarget.replace(/\s+/g, "");
  scrollTo = document.querySelector(createID);
  window.scroll(0, scrollTo.offsetTop - navCont.offsetHeight + 100);
  removeActiveNavClass();
  event.target.classList.add("activeNavLink");
});

//scroll to top of page with return button
const returnBtn = document.querySelector(".return-button");

returnBtn.addEventListener("click", function() {
  window.scroll(0, pageTop.offsetTop - navCont.offsetHeight);
});

//add active classes based on scroll position
// based calculation on stack-verflow9https://stackoverflow.com/questions/50431891/how-can-i-detect-the-scrolltop-of-an-element-using-vanilla-javascript0
document.addEventListener("scroll", function(event) {
  for (let section of sections) {
    let documentScroll = document.scrollingElement.scrollTop;
    let sectionScroll = section.offsetTop;
    if (documentScroll > sectionScroll - navCont.offsetHeight) {
      removeActiveClass();
      section.classList.add("activeSection");
      const activeSection = document.querySelector(".activeSection");
      const activeNavItems = document.getElementsByClassName("menu__link");

      for (let activeNavItem of activeNavItems) {
        if (activeSection.id === activeNavItem.id.slice(0, 8)) {
          removeActiveNavClass();
          activeNavItem.classList.add("activeNavLink");
        }
      }
    }
  }
});
