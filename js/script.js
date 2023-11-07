AOS.init();

// BURGER
const mobileDiv = document.querySelector(".mobile div");
const mobileNav = document.querySelector(".mobile nav");
const mobileNavUl = document.querySelector(".mobile nav ul");
const mobileUlLi = document.querySelectorAll(".mobile ul li");

mobileDiv.addEventListener("click", () => {
  mobileDiv.classList.toggle("active");
  mobileNav.classList.toggle("open");
  mobileNavUl.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".mobile")) {
    mobileDiv.classList.remove("active");
    mobileNav.classList.remove("open");
    mobileNavUl.classList.remove("show");
  }
});

for (let a = 1; a <= mobileUlLi.length; a++) {
  mobileUlLi[a - 1].style.animationDelay = "." + (a + 1) + "s";
}

// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}
