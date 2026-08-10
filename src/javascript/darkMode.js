function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const icon = document.querySelector("#theme-icon");

  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    icon.textContent = "🌙";
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    icon.textContent = "☀️";
  }
}