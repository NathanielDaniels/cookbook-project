// const formRecipes = document.getElementById("formRecipes");
// const recipesList = document.querySelector("#recipesList");
// const form = document.getElementsByClassName("recipe-name");

const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const recipes = document.querySelectorAll(".grid-item");

const form = document.forms[0];
// console.log(form);
//! Hero Animations =====================================
$(function () {
  $(".main-title").hide().delay(100).fadeIn(2000);
  $("#btn").hide().delay(100).fadeIn(1000).animate({
    bottom: "-55px",
    opacity: 0.9,
  });
});

//! Top Recipe Arrows =====================================
let pagination = document.querySelector(".pagination");
let dots = pagination.children;
let w = window.innerWidth;
let h = window.innerHeight;

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});

let counter = 0;
prevArrow.addEventListener("click", () => {
  counter++;
  // console.log(counter);
  if (counter <= 3 && counter >= -3) {
    counter++;
    for (let i = 0; i < recipes.length; i++) {
      let moveRight = (parseInt(recipes[i].style.left, 10) || 0) + 320;
      if (w < "1200") {
        console.log("working under 1200");
        moveRight = (parseInt(recipes[i].style.left, 10) || 0) + 250;
      }
      if (w < "900") {
        console.log("working under 900");
        moveRight = (parseInt(recipes[i].style.left, 10) || 0) + 220;
      }
      recipes[i].style.position = "relative";
      recipes[i].style.left = moveRight + "px";
      function dotsLeft() {
        for (let i = 0; i < dots.length; i++) {
          if (dots[i].classList.value === "active") {
            dots[i].classList.remove("active");
            dots[(i -= 1)].classList.add("active");
          }
        }
      }
    }
    dotsLeft();
  } else if (counter > 3) {
    counter--;
  } else {
    nextArrow.disabled = true;
  }
});

nextArrow.addEventListener("click", () => {
  counter--;
  // console.log(counter);
  if (counter >= -3 && counter <= 3) {
    counter--;
    for (let i = 0; i < recipes.length; i++) {
      let moveLeft = (parseInt(recipes[i].style.left, 10) || 0) - 320;
      if (w < "1200") {
        moveLeft = (parseInt(recipes[i].style.left, 10) || 0) - 250;
      }
      if (w < "900") {
        moveLeft = (parseInt(recipes[i].style.left, 10) || 0) - 220;
      }
      recipes[i].style.position = "relative";
      recipes[i].style.left = moveLeft + "px";
      function dotsRight() {
        for (let i = 0; i < dots.length; i++) {
          if (dots[i].classList.value === "active") {
            dots[i].classList.remove("active");
            dots[(i += 1)].classList.add("active");
          }
        }
      }
    }
    dotsRight();
  } else if (counter < -3) {
    counter++;
  } else {
    prevArrow.disabled = true;
  }
});

//! Click Recipe Popup Module =====================

hoverText = document.querySelectorAll(".hover-text");
items = document.querySelectorAll(".grid-item");

function addEventListenerList(list) {
  console.log("working!!!");

  for (let i = 0; i < recipes.length; i++) {
    list[i].addEventListener("click", () => {
      console.log("clicked");
      list[i].classList.toggle("active");
    });
  }
}

addEventListenerList(hoverText);

//? Running All Recipe Items at once?!
//? Not what I'm looking for (DELETE Once Complete)
// recipes.forEach(function () {
//   console.log("working now?");
//   this.addEventListener("click", () => {
//     console.log("EventListener Working");
//   });
// });
//! FORM DATA =====================================
const recipeLocation = document.createElement("div");
recipeLocation.classList = "recipeLocation";
const firstRecipe = document.querySelector(".firstRecipe");

// console.log(firstRecipe);

// let formData = new FormData();
// formData.append("key1", "value1");

// console.log(formData);

let formInfo = {};

// firstRecipe.push(formInfo);

form.onsubmit = async (e) => {
  e.preventDefault();

  const nameValue = form.querySelector('input[type="text"]').value;
  // console.log(nameValue);
  formInfo.name = nameValue;

  const ingredientsValue = form.querySelector('textarea[name="ingredientList"]')
    .value;

  //! creating list for ingredients =====================
  // function list(ingredientsValue) {
  //   return `<li>${ingredientsValue}</li>`;
  // }

  formInfo.ingredients = ingredientsValue;
  // formInfo.ingredients = list(ingredientsValue);

  const instructionsValue = form.querySelector('textarea[name="instruction"]')
    .value;
  formInfo.instructions = instructionsValue;

  const favLinkValue = form.querySelector('input[name="favLink"]').value;
  formInfo.website = favLinkValue;

  const file = form.querySelector('input[type="file"]');
  console.log(file);

  console.log(formInfo);
  firstRecipe.append(formInfo);

  // let response = await fetch("", {
  //   method: "POST",
  //   body: new FormData(form),
  // });

  // console.log(response);
  // let result = await response.json();

  // alert(result.message);
  recipeLocation.append(formInfo);
};

// console.log(document.forms);
