// loop over sections to get each of data-nav attribute
const fragment = document.createDocumentFragment(),
  pageTop = document.getElementById("main-heading"),
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
    section.classList.remove("activeSection");
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
  scrollTo.classList.add("activeSection");
});

//scroll to top of pagge with return button
const returnBtn = document.querySelector(".return-button");

returnBtn.addEventListener("click", function() {
  window.scroll(0, pageTop.offsetTop - navCont.offsetHeight);
});

//detect Scroll stop and hide navigation based set Timeout code on W3 schools (https://www.w3schools.com/jsref/met_win_cleartimeout.asp) and stack overflow(https://stackoverflow.com/questions/3701311/event-when-user-stops-scrolling/3701328)
let time;

window.addEventListener("scroll", function() {
  navCont.style.display = "block";
  if (window.scrollY > 400) {
    clearTimeout(time);
    time = setTimeout(stopScroll, 1000);
    navCont.style.display = "block";
  }
});

let stopScroll = function() {
  navCont.style.display = "none";
};
