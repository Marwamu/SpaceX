const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerHTML = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      console.log(target);
      counter.innerHTML = target;
    };
    updateCounter();
    
  });
}

countUp();
