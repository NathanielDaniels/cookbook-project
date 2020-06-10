let cl = (log) => {
  return console.log(log);
};

const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const scrollRecipes = document.querySelectorAll(".scroll");

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

//* ============================================
//! Top Recipe Arrows =====================================
let pagination = document.querySelector(".pagination");
let dots = pagination.children;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

window.addEventListener("resize", function () {
  cl(window.innerWidth);
});

let counter = 0;
prevArrow.addEventListener("click", () => {
  counter++;
  // console.log(counter);
  if (counter <= 3 && counter >= -3) {
    counter++;
    for (let i = 0; i < scrollRecipes.length; i++) {
      let moveRight = (parseInt(scrollRecipes[i].style.left, 10) || 0) + 320;
      if (screenWidth < "1200") {
        cl("working under 1200");
        moveRight = (parseInt(scrollRecipes[i].style.left, 10) || 0) + 250;
      }
      if (screenWidth < "900") {
        cl("working under 900");
        moveRight = (parseInt(scrollRecipes[i].style.left, 10) || 0) + 220;
      }
      scrollRecipes[i].style.position = "relative";
      scrollRecipes[i].style.left = moveRight + "px";
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
    for (let i = 0; i < scrollRecipes.length; i++) {
      let moveLeft = (parseInt(scrollRecipes[i].style.left, 10) || 0) - 320;
      if (screenWidth < "1200") {
        moveLeft = (parseInt(scrollRecipes[i].style.left, 10) || 0) - 250;
      }
      if (screenWidth < "900") {
        moveLeft = (parseInt(scrollRecipes[i].style.left, 10) || 0) - 220;
      }
      scrollRecipes[i].style.position = "relative";
      scrollRecipes[i].style.left = moveLeft + "px";
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

//* ====================================================
//! Click Recipe for Overlay Module =====================

let hoverText = document.querySelectorAll(".hover-text");
let items = document.querySelectorAll(".top-grid-item");
topRecipesBody = document.querySelector(".topRecipes-body");
let recipeItems = document.querySelector(".recipeItems");
// popup = document.querySelector(".overlay");
mobileOverlay = document.querySelector(".mobileOverlay");
let mainContainer = document.querySelector(".main-container");
let overlayRecipe = document.querySelector(".overlayRecipe");
let overlayBlur = document.querySelector(".overlayBlur");

function addEventListenerList(list) {
  for (let i = 0; i < items.length; i++) {
    list[i].addEventListener("click", () => {
      if (screenWidth < "1200") {
        // console.log("Clicked on Mobile");
        list[i].classList.toggle("active");
      }
    });

    list[i].addEventListener("dblclick", async function () {
      overlayRecipe.style.display = "block";
      overlayRecipe.innerHTML = `
        <div class="closeBtn">X</div>
        <div class="overlayContent">
          <div class="recipeTemplate">
            <h1>${recipesArr[i].title}</h1>
            <p>${recipesArr[i].info}</p>
            <div class="recipeIngredients">
              <h3>Ingredients</h3>
              <p>${recipesArr[i].ingredients}</p>
            </div>
            <div class="recipeInstructions">
              <h3>Instructions</h3>
              <p>${recipesArr[i].instructions}</p>
            </div>
          </div>
        </div>
        `;

      // ! Overlay screen size
      if (screenWidth > "745") {
        console.log("screen over 745");
        overlayRecipe.classList.toggle("activeOverlay");
        // recipeItems.classList.add("blur");
      } else {
        console.log("screen under 745");
        overlayRecipe.classList.toggle("mobileOverlay");
      }

      mainContainer.classList.add("blur");

      //! Disable/Enable Scroll
      function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        (scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft),
          // if any scroll is attempted, set this to the previous value
          (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
          });
      }
      disableScroll();

      function enableScroll() {
        window.onscroll = function () {};
      }

      //! Close overlay when clicking "X" Btn
      let closeOverlay = await document.querySelector(".closeBtn");
      closeOverlay.addEventListener("click", () => {
        overlayRecipe.classList.remove("activeOverlay");
        overlayRecipe.classList.remove("mobileOverlay");
        overlayRecipe.style.display = "none";
        mainContainer.classList.remove("blur");
        overlayBlur.style.display = "none";
        enableScroll();
      });

      //! Close overlay when clicking outside modal
      document.addEventListener("click", () => {
        let isClickInside = overlayRecipe.contains(event.target);

        if (!isClickInside) {
          overlayRecipe.classList.remove("activeOverlay");
          overlayRecipe.classList.remove("mobileOverlay");
          overlayRecipe.style.display = "none";
          mainContainer.classList.remove("blur");
          overlayBlur.style.display = "none";
          enableScroll();
        }
      });
    });
  }
}
addEventListenerList(hoverText);

//! Add Dynamic Content to modul overlay
const recipesArr = [
  {
    title: "Taco Soup",
    info: "Talk about taco Soup",
    ingredients: "&#8226 Taco Soup <br> &#8226 Taco Soup <br>",
    instructions: "instructions here instructions here instructions here",
  },
  {
    title: "Carrot Veggie Dish",
    info: "Talk about Carrot Veggie Dish",
    ingredients:
      "&#8226 Carrot Veggie Dish <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item <br> &#8226 Next Item",
    instructions: "instructions here instructions here instructions here",
  },
  {
    title: "Cast Iron Steak",
    info: "Talk about cast iron steak",
    ingredients: "&#8226 ",
    instructions: "instructions here instructions here instructions here",
  },
  {
    title: "Taco Cups",
    info: "Talk about Taco Cups",
    ingredients: "&#8226 ",
    instructions: "instructions here instructions here instructions here",
  },
  {
    title: "Pan fried COD",
    info: "Talk about Pan Frying COD",
    ingredients: "&#8226 Pan fried COD",
    instructions: "instructions here instructions here instructions here",
  },
  {
    title: "Blu+Bri Burgers",
    info: "Talk about Blu + Bri Burgers",
    ingredients: "&#8226 Blu + Bri Burgers",
    instructions: "instructions here instructions here instructions here",
  },
];

//*=================================================
//! FORM DATA =====================================
// const recipeLocation = document.createElement("div");
// recipeLocation.classList = "recipeLocation";
// const firstRecipe = document.querySelector(".firstRecipe");

// console.log(firstRecipe);

// let formData = new FormData();
// formData.append("key1", "value1");

// console.log(formData);

// let formInfo = {};

// firstRecipe.push(formInfo);

// form.onsubmit = async (e) => {
//   e.preventDefault();

// const nameValue = form.querySelector('input[type="text"]').value;
// console.log(nameValue);
// formInfo.name = nameValue;

// const ingredientsValue = form.querySelector('textarea[name="ingredientList"]')
//   .value;

//! creating list for ingredients =====================
// function list(ingredientsValue) {
//   return `<li>${ingredientsValue}</li>`;
// }

// formInfo.ingredients = ingredientsValue;
// formInfo.ingredients = list(ingredientsValue);

// const instructionsValue = form.querySelector('textarea[name="instruction"]')
//   .value;
// formInfo.instructions = instructionsValue;

// const favLinkValue = form.querySelector('input[name="favLink"]').value;
// formInfo.website = favLinkValue;

// const file = form.querySelector('input[type="file"]');
// cl(file);

// cl(formInfo);
// firstRecipe.append(formInfo);

// let response = await fetch("", {
//   method: "POST",
//   body: new FormData(form),
// });

// console.log(response);
// let result = await response.json();

// alert(result.message);
// recipeLocation.append(formInfo);
// };

// console.log(document.forms);

//==============================
//! Javascript Practice

//? Reverse a string
// function reverseString(str) {
//   let splitString = str.split("");
//   console.log(splitString);
//   splitString.reverse();
//   return splitString;
// }
// console.log(reverseString("hello"));

//? check if integer is divisible by five
// function divisibleByFive(n) {
//   if (n % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(divisibleByFive(5));

//? Equality Check

// function equality(value, type) {
//   console.log(typeof value, typeof type);
//   if (value === type) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(equality(NaN, NaN));

//? Word Without First Character

// function newWord(txt) {
//   let newString = txt.substring(1, txt.length);
//   return newString;
// }

// console.log(newWord("woodhog"));

//? Using the && Operator

// function and(a, b) {
//   if (a !== true) {
//     return false;
//   } else if (b !== true) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(and(false, false));

//? Using the && Operator
