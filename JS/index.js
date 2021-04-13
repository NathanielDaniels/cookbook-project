// import recipeData from "./RecipeData.js"
import recipesArr from "./recipes.js"
//! ======================================

const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const scrollRecipes = document.querySelectorAll(".scroll");
const form = document.forms[0];

//! Window Resize log
window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});

//! Scroll Log
// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// });

// console.log(window.pageYOffset);

// let scrollLocation = (window.scrollY = `${window.scrollY}px`);
// console.log(scrollLocation);


//! Recipe Button Click Smooth Scroll =====================================
const btn = document.querySelector('#btn')
const html = document.querySelector("html")

btn.addEventListener('click', () => {
  html.style.scrollBehavior = "smooth"
})

// //? Remove smooth-scroll when clicking recipes.
btn.addEventListener('mouseleave', () => {
  html.style.scrollBehavior = "auto"

})


//* ==================================
//! Click Recipe for Overlay Module ======================================

const hoverText = document.querySelectorAll(".hover-text");
const allRecipeItems = document.querySelectorAll(".allRecipes");
const mainContainer = document.querySelector(".main-container");
const overlayModal = document.querySelector(".overlayModal");
const screenWidth = window.innerWidth;

const topRecipesBody = document.querySelector(".topRecipes-body");
const topRecipeItems = document.querySelectorAll(".top-grid-item");
const mainRecipeItems = document.querySelector(".recipeItems");
const mobileOverlay = document.querySelector(".mobileOverlay");
const overlayContent = document.querySelector(".overlayContent");
const bg = document.querySelector(".bg");
const screenHeight = window.innerHeight;



// let printSection = document.querySelector("#printSection");

//! Recipe Item Click (All Recipes (Top + Main))
function addEventListenerList(recipeList) {
  for (let i = 0; i < allRecipeItems.length; i++) {
    // recipeList[i].addEventListener("click", () => {
    //   if (screenWidth < "1200") {
    //     recipeList[i].classList.toggle("active");
    //   }
    // });

    //? Click Event for each Recipe Link
    recipeList[i].addEventListener("click", async function () {
      //? Save Scroll Location
      const scrollLocation = Math.floor(parseInt(window.scrollY));

      //? Add Blur and Overloay
      mainContainer.classList.add("blur");
      overlayModal.style.display = "block";

      //? Dynamic Html Content (Recipe Modal)
      overlayModal.innerHTML = `
        <div class="closeBtnBg">
          <div class="closeBtn">X</div>
        </div>
        <div class="print"></div>
        <div class="overlayContent">
          <div class="recipeTemplate">
            <h1>${recipesArr[i].title}</h1>
            <p class="aboutRecipe">${recipesArr[i].about}</p>
            <p class="recipeInfo">${recipesArr[i].info}</p>
            <div class="recipeIngredients">
              <h3>Ingredients</h3>
              <div class="ingredients">${recipesArr[i].ingredients}</div>
            </div>
            <div class="recipeInstructions">
              <h3>Instructions</h3>
              <div>${recipesArr[i].instructions}</div>
            </div>
          </div>
        </div>
        `;

      overlayModal.classList.toggle("activeOverlay");

      // ! Overlay screen size
      //? testing which modal shows at screen width
      // if (screenWidth > "745") {
      //   // console.log("screen over 745");
      //   overlayModal.classList.toggle("activeOverlay");
      // } else {
      //   // console.log("screen under 745");
      //   overlayModal.classList.toggle("mobileOverlay");
      // }

      //! Print Recipe
      let print = await document.querySelector(".print");
      print.addEventListener("click", async () => {
        printElement(await document.querySelector(".recipeTemplate"));
      });
      function printElement(elem) {
        let domClone = elem.cloneNode(true);
        let printSection = document.getElementById("printSection");
        if (!printSection) {
          printSection = document.createElement("div");
          printSection.id = "printSection";
          document.body.appendChild(printSection);
        }
        printSection.appendChild(domClone);
        window.print();
        printSection.remove();
      }

      //! Close overlay (clicking "X" Btn)
      let closeOverlay = await document.querySelector(".closeBtnBg");
      closeOverlay.addEventListener("click", async () => {
        overlayModal.classList.remove("activeOverlay");
        overlayModal.classList.remove("mobileOverlay");
        overlayModal.style.display = "none";
        mainContainer.classList.remove("blur");

        //? Back to Scroll location before clicking recipe Modal
        window.scrollTo(0, scrollLocation);
      });

      //! Close overlay (clicking outside modal)
      //? Problems with overlayModal being the correct click
      // overlayModal.addEventListener("click", (e) => {

      //   const mainTitle = document.querySelector('.main-title >h1')
      //   console.log("main title",mainTitle)

      //   const active = document.querySelector('.activeOverlay')
      //   console.log("active",active)

      //   let isClickInside = overlayModal.contains(e.target);
      //   console.log("Click Inside",isClickInside)

      //   let isClickOutside = mainTitle.contains(e.target);
      //   console.log("Click Outside",isClickOutside)

      //   if (!isClickInside) {
      //     overlayModal.classList.remove("activeOverlay");
      //     overlayModal.classList.remove("mobileOverlay");
      //     overlayModal.style.display = "none";
      //     mainContainer.classList.remove("blur");

      //     //? Back to Scroll location before clicking recipe Modal
      //     window.scrollTo(0, scrollLocation);
      //   }
      // });
    });
  }
}

// ! Overlay screen size
if (screenWidth > "900") {
  addEventListenerList(hoverText);
} else {
  addEventListenerList(allRecipeItems);
}

//*==================================
//! Instagram Section =====================================
const bannerImg = document.querySelector("#banner");
const thumbImg = document.querySelectorAll("#thumb > img")
const imgSrcList = [];
let index = 0;

let imgRotation = setInterval(() => {
    if (index !== imgSrcList.length) {
      bannerImg.style.transition = 'all .3s ease-in-out';
      bannerImg.innerHTML = `<img src="${imgSrcList[index++]}">`
    } else {
      index = 0;
    }
  }, 3000)

thumbImg.forEach(img => {
  img.addEventListener("click", box);
  let eachImg = img.getAttribute('src')
  imgSrcList.push(eachImg);
});

function box() {
  clearInterval(imgRotation)
  let imgSrc = this.getAttribute("src");
  bannerImg.innerHTML = `<img src="${imgSrc}">`;
}

//*==================================
//! Main Recipe Arrows =====================================

let pagination = document.querySelector(".pagination");
let dots = pagination.children;
// let screenWidth = window.innerWidth;
// let screenHeight = window.innerHeight;

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



//?=============================================
//! FORM DATA =====================================
// form.onsubmit = async (e) => {
//   e.preventDefault();
// };

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

//?=============================================
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

//?=============================================
//? Might not need, saving until completion
//! Disable/Enable Scroll
// function disableScroll() {
//   // Get the current page scroll position
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   (scrollLeft =
//     window.pageXOffset || document.documentElement.scrollLeft),
//     // if any scroll is attempted, set this to the previous value
//     (window.onscroll = function () {
//       window.scrollTo(scrollLeft, scrollTop);
//     });
// }
// disableScroll();

// function enableScroll() {
//   window.onscroll = function () {};
// }

//! When the modal is hidden.
// const scrollY = document.body.style.top;
// document.body.style.position = "";
// document.body.style.top = "";
// window.scrollTo(0, parseInt(scrollY || "0") * -1);
// window.scrollTo(0, parseInt(window.pageYOffset) * -1);

// mainContainer.style.overflowY = "scroll";
// enableScroll();

//?=====================================
//! Recipe Array (before split)
// const recipesArr = [
//   {
//     location: "Top Recipes",
//     title: "Taco Soup",
//     info: "Talk about taco Soup",
//     ingredients: "&#8226 Taco Soup <br> &#8226 Taco Soup <br>",
//     instructions: "instructions here instructions here instructions here",
//   },
//   {
//     location: "Top Recipes",
//     title: "Carrot Veggie Dish",
//     info: "Talk about Carrot Veggie Dish",
//     ingredients: `<ul>
//         <li>&#8226 Carrot Veggie Dish</li>
//         <li>&#8226 Carrot Veggie Dish</li>
//         <li>&#8226 Carrot Veggie Dish</li>
//         <li>&#8226 Carrot Veggie Dish</li>
//         <li>&#8226 Carrot Veggie Dish</li>
//       </ul>`,
//     instructions: `<ul>
//       <li>instructions here instructions here instructions here</li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>`,
//   },
//   {
//     location: "Top Recipes",
//     title: "Cast Iron Steak",
//     info: "Talk about cast iron steak",
//     ingredients: "&#8226 ",
//     instructions: `<ul>
//       <li>instructions here instructions here instructions here</li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>`,
//   },
//   {
//     location: "Top Recipes",
//     title: "Taco Cups",
//     info: "Talk about Taco Cups",
//     ingredients: "&#8226 ",
//     instructions: `<ul>
//       <li>instructions here instructions here instructions here</li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>`,
//   },
//   {
//     location: "Top Recipes",
//     title: "Pan fried COD",
//     info: "Talk about Pan Frying COD",
//     ingredients: "&#8226 Pan fried COD",
//     instructions: `<ul>
//       <li>instructions here instructions here instructions here</li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>`,
//   },
//   {
//     location: "Top Recipes",
//     title: "Blu+Bri Burgers",
//     info: "Talk about Blu + Bri Burgers",
//     ingredients: "&#8226 Blu + Bri Burgers",
//     instructions: `<ul>
//       <li>instructions here instructions here instructions here</li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>`,
//   },
//   {
//     location: "Main Recipes",
//     title: "Main Recipe Section Test",
//     info: "Test Test Test",
//     ingredients: "&#8226 Test Test",
//     instructions: `<ul>
//       <li>instructions here instructions here instructions here</li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>`,
//   },
// ];

//?=====================================
