const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const scrollRecipes = document.querySelectorAll(".scroll");
const form = document.forms[0];

//! Window Resize log
window.addEventListener("resize", function () {
  cl(window.innerWidth);
});

//! Scroll Log
// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// });

//! Conole.log shortcut
let cl = (log) => console.log(log);

// console.log(window.pageYOffset);

// let scrollLocation = (window.scrollY = `${window.scrollY}px`);
// console.log(scrollLocation);

//! Hero Animations (replace w/GSAP) =====================================
// $(function () {
//   $(".main-title").hide().delay(100).fadeIn(2000);
//   $("#btn").hide().delay(100).fadeIn(1000).animate({
//     bottom: "-55px",
//     opacity: 0.9,
//   });
// });

//* ====================================================
//! Click Recipe for Overlay Module =====================

let hoverText = document.querySelectorAll(".hover-text");
let items = document.querySelectorAll(".top-grid-item");
topRecipesBody = document.querySelector(".topRecipes-body");
let recipeItems = document.querySelector(".recipeItems");
mobileOverlay = document.querySelector(".mobileOverlay");
let mainContainer = document.querySelector(".main-container");
let overlayModal = document.querySelector(".overlayModal");

//! Recipe Item Click Func.
function addEventListenerList(list) {
  for (let i = 0; i < items.length; i++) {
    list[i].addEventListener("click", () => {
      if (screenWidth < "1200") {
        list[i].classList.toggle("active");
      }
    });

    list[i].addEventListener("dblclick", async function () {
      const scrollLocation = Math.floor(parseInt(window.scrollY));
      console.log("scrollLocal", scrollLocation);
      console.log(window.pageYOffset);

      console.log("Local when double CLick", scrollLocation);

      mainContainer.classList.add("blur");

      //! HERE IS THE MAIN SCROLL ISSUE
      // mainContainer.style.position = "fixed";
      // mainContainer.style.top = `-${scrollLocation}px`;

      overlayModal.style.display = "block";
      overlayModal.innerHTML = `
        <div class="closeBtnBg">
          <div class="closeBtn">X</div>
        </div>
        <div class="overlayContent">
          <div class="print"></div>
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
        // console.log("screen over 745");
        overlayModal.classList.toggle("activeOverlay");
        
      } else {
        // console.log("screen under 745");
        overlayModal.classList.toggle("mobileOverlay");
        
      }

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

      //! Printer Icon
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
        printSection.innerHTML = "";
        printSection.appendChild(domClone);
        window.print();
      }

      //! Close overlay (clicking "X" Btn)
      let closeOverlay = await document.querySelector(".closeBtnBg");
      closeOverlay.addEventListener("click", () => {
        overlayModal.classList.remove("activeOverlay");
        overlayModal.classList.remove("mobileOverlay");
        overlayModal.style.display = "none";
        mainContainer.classList.remove("blur");
        // document.body.style.position = "static";

        //? Back to Scroll location before clicking recipe Modal
        window.scrollTo(0, scrollLocation);
        // window.scrollY(scrollLocation);

        console.log("location after Modal Close(X) ", scrollLocation);

        //? MAIN ISSUE OF MODAL SCROLL LOCATION
        // mainContainer.style.scrollTop = `-${scrollLocation}px`;

        //! When the modal is hidden.
        // const scrollY = document.body.style.top;
        // document.body.style.position = "";
        // document.body.style.top = "";
        // window.scrollTo(0, parseInt(scrollY || "0") * -1);
        // window.scrollTo(0, parseInt(window.pageYOffset) * -1);

        // mainContainer.style.overflowY = "scroll";
        // enableScroll();
      });

      //! Close overlay (clicking outside modal)
      document.addEventListener("click", () => {
        let isClickInside = overlayModal.contains(event.target);

        if (!isClickInside) {
          overlayModal.classList.remove("activeOverlay");
          overlayModal.classList.remove("mobileOverlay");
          overlayModal.style.display = "none";
          mainContainer.classList.remove("blur");
          // document.body.style.position = "static";

          //? Back to Scroll location before clicking recipe Modal
          // window.scrollTo(0, scrollLocation);

          //! When the modal is hidden.
          // const scrollY = document.body.style.top;

          // document.body.style.position = "";
          // document.body.style.top = "";
          // window.scrollTo(0, parseInt(scrollY || "800") * -1);
          // window.scrollTo(0, parseInt(scrollY) * -1);

          // enableScroll();
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
    ingredients: `<ul>
        <li>&#8226 Carrot Veggie Dish</li>
        <li>&#8226 Carrot Veggie Dish</li>
        <li>&#8226 Carrot Veggie Dish</li>
        <li>&#8226 Carrot Veggie Dish</li>
        <li>&#8226 Carrot Veggie Dish</li>
      </ul>`,
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    title: "Cast Iron Steak",
    info: "Talk about cast iron steak",
    ingredients: "&#8226 ",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    title: "Taco Cups",
    info: "Talk about Taco Cups",
    ingredients: "&#8226 ",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    title: "Pan fried COD",
    info: "Talk about Pan Frying COD",
    ingredients: "&#8226 Pan fried COD",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    title: "Blu+Bri Burgers",
    info: "Talk about Blu + Bri Burgers",
    ingredients: "&#8226 Blu + Bri Burgers",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
];

//* ============================================
//! Main Recipe Arrows =====================================
let pagination = document.querySelector(".pagination");
let dots = pagination.children;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

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

//*=================================================
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

//================================================================================================
