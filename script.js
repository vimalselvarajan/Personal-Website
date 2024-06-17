const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
});

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }
});

const btn = document.querySelector(".theme-btn");
const themeLink = document.querySelector("#theme-link");

// Load theme from local storage when page loads
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeLink.href = savedTheme;
    }
});

btn.addEventListener("click", function() {
  if (themeLink.getAttribute("href") == "light-theme.css") {
    themeLink.href = "dark-theme.css";
  } else {
    themeLink.href = "light-theme.css";
  }
  // Save the current theme to local storage
  localStorage.setItem('theme', themeLink.href);
});
