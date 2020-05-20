const formRecipes = document.getElementById("formRecipes");
const recipesList = document.querySelector("#recipesList");
const form = document.getElementsByClassName("recipe-name");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const recipes = document.querySelectorAll(".grid-item");

$(function () {
  $(".main-title").hide().delay(100).fadeIn(2000);
  $("#btn").hide().delay(100).fadeIn(1000).animate({
    bottom: "-55px",
    opacity: 0.9,
  });
});

let currentLocation = "0";
prevArrow.addEventListener("click", () => {
  console.log("clicked");

  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.position = "relative";
    recipes[i].style.left = `-${currentLocation}px`;
  }
});
nextArrow.addEventListener("click", () => {
  console.log("clicked");

  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.position = "relative";
    recipes[i].style.left = `${currentLocation}px`;
  }
});
