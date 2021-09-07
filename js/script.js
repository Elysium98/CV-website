const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = sessionStorage.getItem("selected-theme");
const selectedIcon = sessionStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
console.log(getCurrentTheme());
console.log(getCurrentIcon());

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  sessionStorage.setItem("selected-theme", getCurrentTheme());
  sessionStorage.setItem("selected-icon", getCurrentIcon());
  console.log(getCurrentTheme());
  console.log(getCurrentIcon());
});

test23