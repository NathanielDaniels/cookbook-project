const formRecipes = document.getElementById("formRecipes");
const recipesList = document.querySelector("#recipesList");
const form = document.getElementsByClassName("recipe-name");

$(function () {
  $(".main-title").hide().delay(100).fadeIn(2000);
  $("#btn").hide().delay(100).fadeIn(2000).animate({
    bottom: "-55px",
    opacity: 0.9,
  });

  // $(window).scroll(function() {
  //   $(".recipes-title")
  //     .hide()
  //     .delay(500)
  //     .fadeIn(2000);
  // });
});
