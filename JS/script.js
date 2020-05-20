const formRecipes = document.getElementById("formRecipes");
const recipesList = document.querySelector("#recipesList");
const form = document.getElementsByClassName("recipe-name");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const recipes = document.querySelectorAll(".grid-item");

console.log(recipes);

function recipeList() {
  for (recipe of recipes) {
    console.log(recipe);
  }
}

$(function () {
  $(".main-title").hide().delay(100).fadeIn(2000);
  $("#btn").hide().delay(100).fadeIn(1000).animate({
    bottom: "-55px",
    opacity: 0.9,
  });
});

prevArrow.addEventListener("click", () => {
  console.log("clicked");
  // recipes.style.position = "relative";
  // recipes.style.left = "-300px";
  lastRecipe.style.position = "relative";
  lastRecipe.style.left = "-300px";
});
