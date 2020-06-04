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
// topRecipesBody = document.querySelector(".topRecipes-body");
let recipeItems = document.querySelector(".recipeItems");
// popup = document.querySelector(".overlay");
// mobileOverlay = document.querySelector(".mobileOverlay");
let mainContainer = document.querySelector(".main-container");
let overlayContent = document.querySelector(".overlayContent");

function addEventListenerList(list) {
  for (let i = 0; i < items.length; i++) {
    list[i].addEventListener("click", () => {
      if (screenWidth < "1200") {
        // console.log("Clicked on Mobile");
        list[i].classList.toggle("active");
      }
    });

    list[i].addEventListener("dblclick", function () {
      function overlay(id) {
        let el = document.querySelector(id);
        let body = document.querySelector("body");

        let overlayRecipeDiv = document.createElement("div");
        overlayRecipeDiv.className = "overlayRecipe";
        body.appendChild(overlayRecipeDiv);

        let overlayContentDiv = document.createElement("div");
        overlayContentDiv.className = "overlayContent";
        overlayRecipeDiv.appendChild(overlayContentDiv);

        let recipeTemplateDiv = document.createElement("div");
        recipeTemplateDiv.className = "recipeTemplate";

        let recipeTitle = document.createElement("h1");
        recipeTitle.className = "recipeTitle";
        // recipeTitle.innerHTML = `${recipesArr[0].title}`;
        let recipeInfo = document.createElement("h3");
        recipeInfo.className = "recipeInfo";
        // recipeInfo.innerHTML = `${recipesArr[0].info}`;

        recipeTemplateDiv.appendChild(recipeTitle);
        recipeTemplateDiv.appendChild(recipeInfo);

        // <h1>${recipesArr[0].title}</h1>
        // <h3>${recipesArr[0].info}</h3>
        // <p class="recipeIngredients">${recipesArr[0].ingredients}</p>
        // <p class="recipeInstructions">${recipesArr[0].instructions}</p>

        overlayContentDiv.appendChild(recipeTemplateDiv);

        //! close button
        let close = document.createElement("span");
        close.className = "closeOverlay";
        close.innerHTML = "X";
        close.addEventListener("click", () => {
          let overlay = body.querySelector(".overlayRecipe");
          let closeBtn = parent.querySelector(".closeOverlay");

          body.removeChild(overlay);
          // el.classList.remove();
        });
      }
      overlay();
      // overlayRecipe.innerHTML += `
      // // <!--<div class="overlayBlur"></div>-->
      // // <!-- <div class="overlayRecipe"> -->
      // //   <div class="overlayContent">
      // //     <div class="closeBtn">X</div>
      // //     <div class="recipeTemplate">
      // //       <h1>${recipesArr[0].title}</h1>
      // //       <h3>${recipesArr[0].info}</h3>
      // //       <p class="recipeIngredients">${recipesArr[0].ingredients}</p>
      // //       <p class="recipeInstructions">${recipesArr[0].instructions}</p>
      // //     </div>
      // //   </div>
      // // <!-- </div> -->
      // // `;

      // ! Overlay screen size
      // if (screenWidth > "745") {
      //   console.log("screen over 745");
      //   overlayRecipe.classList.toggle("activeOverlay");
      //   // recipeItems.classList.add("blur");
      // } else {
      //   console.log("screen under 745");
      //   overlayRecipe.classList.toggle("mobileOverlay");
      // }

      // overlayBlur.style.display = "block";
      mainContainer.classList.add("blur");
      mainContainer.style.overflow = "none";
      // overlayContent.style.display = "block";

      //! Close overlay when clicking outside modal
      document.addEventListener("click", () => {
        let isClickInside = overlayRecipe.contains(event.target);

        mainContainer.style.cursor = "pointer";

        if (!isClickInside) {
          overlayRecipe.classList.remove("activeOverlay");
          overlayRecipe.classList.remove("mobileOverlay");

          // recipeItems.classList.remove("blur");
          mainContainer.classList.remove("blur");
          overlayBlur.style.display = "none";
        }
      });
    });
  }
}
addEventListenerList(hoverText);

//! Add Dynamic Content to modul overlay
const recipesArr = [
  {
    title: "Taco Cups",
    info: "Talk about taco cups",
    ingredients: "Ingredients go here",
    instructions: "instructions here instructions here instructions here",
  },
];

// if (!overlayRecipe) {
//   console.log("if statement test received");
//   overlayRecipe.style.display = "none";
// } else {
//   overlayRecipe.innerHTML += `
//       <!--<div class="overlayBlur"></div>-->
//       <!-- <div class="overlayRecipe"> -->
//         <div class="overlayContent">
//           <div class="closeBtn">X</div>
//           <div class="recipeTemplate">
//             <h1>${recipesArr[0].title}</h1>
//             <h3>${recipesArr[0].info}</h3>
//             <p class="recipeIngredients">${recipesArr[0].ingredients}</p>
//             <p class="recipeInstructions">${recipesArr[0].instructions}</p>
//           </div>
//         </div>
//       <!-- </div> -->
//       `;
// }

// overlayContent.innerHTML += `<div class="closeBtn">X</div><div class="recipeTemplate">
//     <h1>${recipesArr[0].title}</h1>
//     <h3>${recipesArr[0].info}</h3>
//     <p class="recipeIngredients">${recipesArr[0].ingredients}</p>
//     <p class="recipeInstructions">${recipesArr[0].instructions}</p>
//   </div>`;

//! Close overlay when clicking outside modal
// document.addEventListener("click", () => {
//   let isClickInside = overlayRecipe.contains(event.target);

//   mainContainer.style.cursor = "pointer";

//   if (!isClickInside) {
//     overlayRecipe.classList.remove("activeOverlay");
//     overlayRecipe.classList.remove("mobileOverlay");

//     recipeItems.classList.remove("blur");
//     mainContainer.classList.remove("blur");
//     overlayBlur.style.display = "none";
//   }
// });

//? Need to add Close btn to overlay
//! Close Overlay when clicking close button
// closeBtn.addEventListener("click", () => {
//   overlayRecipe.classList.remove("activeOverlay");
//   overlayRecipe.classList.remove("mobileOverlay");
// });

//*=================================================
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
  cl(file);

  cl(formInfo);
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
