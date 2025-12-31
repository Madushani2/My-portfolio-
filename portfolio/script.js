document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector("i");
  const nav = document.getElementById("navMenu");
  const hero = document.getElementById("hero");

  /* ===== DEFAULT LIGHT THEME ===== */
  document.documentElement.setAttribute("data-theme", "dark");

  /* ===== THEME TOGGLE ===== */
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });

  /* ===== MOBILE MENU ===== */
  window.toggleMenu = function () {
    nav.classList.toggle("show");
  };

  /* ===== HERO ANIMATION RESTART ===== */
function restartHeroAnimations() {
  const typing = document.querySelector(".typing");
  const slideLeft = document.querySelector(".slide-left");
  const slideRight = document.querySelector(".slide-right");

  if (typing) {
    typing.replaceWith(typing.cloneNode(true)); // restart typing animation
  }

  if (slideLeft) {
    slideLeft.replaceWith(slideLeft.cloneNode(true)); // restart slide-left animation
  }

  if (slideRight) {
    slideRight.replaceWith(slideRight.cloneNode(true)); // restart slide-right animation
  }
}

// Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        restartHeroAnimations();
      }
    });
  },
  { threshold: 0.6 } // 60% of hero visible
);

// Start observing
if (hero) observer.observe(hero);


});
