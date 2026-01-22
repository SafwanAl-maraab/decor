function toggleTheme() {

  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

}

// Load Theme On Start
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}
