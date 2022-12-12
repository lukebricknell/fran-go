"use strict";
const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menuButton");

menuButton.addEventListener("click", function (e) {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (!phoneMenu.classList.contains("hidden") && e.key == "Escape") {
    phoneMenu.classList.add("hidden");
  }
});
