document.querySelector(".btn__nav").addEventListener("click", () => {
  document.body.classList.toggle("open");
});

const tabs = document.querySelectorAll(".tabs__tab");
const tabsNav = document.querySelector(".tabs");
const tabsContent = document.querySelectorAll(".tabs__container");

tabsNav.addEventListener("click", function (e) {
  const clickTab = e.target.closest(".tabs__tab");
  const clickTabIndex = Number(clickTab.dataset.active);

  tabs.forEach((tab) => tab.classList.remove("tabs__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("tabs__container--active")
  );

  clickTab.classList.add("tabs__tab--active");
  tabsContent[clickTabIndex].classList.add("tabs__container--active");
});

const accordionPanels = document.querySelectorAll(".accordion__panel");

const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const clickedPanel = e.target.closest(".accordion__panel");
  if (!clickedPanel) return;
  clickedPanel.classList.toggle("accordion__panel--active");

  accordionPanels.forEach((panel) =>
    panel.classList.remove("accordion__panel--active")
  );

  clickedPanel.classList.add("accordion__panel--active");
});

function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!isValidEmail(input.value)) form.classList.add("error");
  else form.classList.remove("error");
});

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  }
);

headerObserver.observe(sections[0]);
