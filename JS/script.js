// const formRecipes = document.getElementById("formRecipes");
// const recipesList = document.querySelector("#recipesList");
// const form = document.getElementsByClassName("recipe-name");

const form = document.querySelector("#form");

const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const recipes = document.querySelectorAll(".grid-item");

//! Hero Animations =====================================
$(function () {
  $(".main-title").hide().delay(100).fadeIn(2000);
  $("#btn").hide().delay(100).fadeIn(1000).animate({
    bottom: "-55px",
    opacity: 0.9,
  });
});

//! Top Recipe Arrows =====================================
let counter = 0;
prevArrow.addEventListener("click", () => {
  counter--;
  console.log(counter);
  if (counter >= -3 && counter <= 3) {
    counter--;
    for (let i = 0; i < recipes.length; i++) {
      let moveLeft = (parseInt(recipes[i].style.left, 10) || 0) - 320;
      recipes[i].style.position = "relative";
      recipes[i].style.left = moveLeft + "px";
    }
  } else if (counter < -3) {
    counter++;
  } else {
    // recipes.disabled = true;
    prevArrow.disabled = true;
  }
});
nextArrow.addEventListener("click", () => {
  counter++;
  console.log(counter);
  if (counter <= 3 && counter >= -3) {
    counter++;
    for (let i = 0; i < recipes.length; i++) {
      let moveRight = (parseInt(recipes[i].style.left, 10) || 0) + 320;
      recipes[i].style.position = "relative";
      recipes[i].style.left = moveRight + "px";
    }
  } else if (counter > 3) {
    counter--;
  } else {
    // recipes.disabled = true;
    nextArrow.disabled = true;
  }
});

//! FORM DATA =====================================

form.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch("../formData.json", {
    method: "POST",
    body: new FormData(form),
  });
  let result = await response.json();

  alert(result.message);
};
