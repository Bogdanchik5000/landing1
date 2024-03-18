const burger = document.querySelector(".burger");
const goTop = document.querySelector(".go-top");
const nav = document.querySelector(".nav");

function toggleClassBurger() {
  burger.className = burger.className === "burger" ? "burger active" : "burger";
}

function scrollTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -70);
    setTimeout(scrollTop, 0);
  }
}

document.addEventListener("click", (e) => {
  if (burger.contains(e.target)) {
    toggleClassBurger();
  } else {
    if (burger.className === "burger active") {
      if (!nav.contains(e.target)) {
        toggleClassBurger();
      }
    }
  }
});

document.addEventListener("scroll", () => {
  goTop.className = window.scrollY > window.innerHeight ? "go-top active" : "go-top";
});

goTop.addEventListener("click", scrollTop);
