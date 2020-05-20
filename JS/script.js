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

prevArrow.addEventListener("click", () => {
  for (let i = 0; i < recipes.length; i++) {
    let moveLeft = (parseInt(recipes[i].style.left, 10) || 0) - 300;
    recipes[i].style.position = "relative";
    recipes[i].style.left = moveLeft + "px";
  }
});
nextArrow.addEventListener("click", () => {
  for (let i = 0; i < recipes.length; i++) {
    let moveRight = (parseInt(recipes[i].style.left, 10) || 0) + 300;
    recipes[i].style.position = "relative";
    recipes[i].style.left = moveRight + "px";
  }
});
