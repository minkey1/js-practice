
var theme = "light"
theme = localStorage.getItem("theme")
console.log(theme)

let stylesheet = document.querySelector("#style")

const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

if (theme === "dark") {
    setDark();
  } else {
    setlight();
  }

function setTheme() {

  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  stylesheet.href = "light-style.css"
  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);

  themeIcon.classList.add("change");
  themeIcon.src = sun;
  localStorage.setItem("theme","light")
}
function setDark() {
    stylesheet.href = "dark-style.css"
  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
  localStorage.setItem("theme","dark")
}


window.addEventListener('scroll', function() {
    const element = document.querySelector('.theme-container');
    const scrollPosition = window.scrollY;

    // Adjust this value to determine when the element starts to fade out
    if (scrollPosition > 100) {
        element.style.opacity = 0;
    } else {
        element.style.opacity = 0.5;
    }
});
