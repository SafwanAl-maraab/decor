document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const header = document.getElementById("mainHeader");

  // Mobile Menu Toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Header Scroll Effect
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shadow-xl", "bg-white/95", "dark:bg-[#0b1c2d]/95");
        header.classList.remove("bg-white/80", "dark:bg-[#0b1c2d]/90");
      } else {
        header.classList.remove("shadow-xl", "bg-white/95", "dark:bg-[#0b1c2d]/95");
        header.classList.add("bg-white/80", "dark:bg-[#0b1c2d]/90");
      }
    });
  }
});
