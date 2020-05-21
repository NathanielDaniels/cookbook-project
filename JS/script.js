// const formRecipes = document.getElementById("formRecipes");
// const recipesList = document.querySelector("#recipesList");
// const form = document.getElementsByClassName("recipe-name");

const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const recipes = document.querySelectorAll(".grid-item");

const form = document.forms[0];
console.log(form);
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

let formData = new FormData();
formData.append("key1", "value1");

// console.log(formData);

form.onsubmit = async (e) => {
  e.preventDefault();

  const nameValue = form.querySelector('input[type="text"]').value;
  console.log(nameValue);

  const ingredientsValue = form.querySelector('textarea[name="ingredientList"]')
    .value;
  console.log(ingredientsValue);
  const instructionsValue = form.querySelector('textarea[name="instruction"]')
    .value;
  console.log(instructionsValue);

  const favLinkValue = form.querySelector('input[name="favLink"]').value;
  console.log(favLinkValue);

  // let response = await fetch("", {
  //   method: "POST",
  //   body: new FormData(form),
  // });

  // console.log(response);
  // let result = await response.json();

  // alert(result.message);
};

// console.log(document.forms);
