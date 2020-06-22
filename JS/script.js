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
      // window.onscroll = function () {
      //   window.scrollTo(scrollLocal);
      // };

      // document.body.style.position = "fixed";
      // document.body.style.position = "absolute";
      mainContainer.style.position = "relative";
      mainContainer.style.top = `-${scrollLocation}px`;
      console.log("Local when double CLick", scrollLocation);

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
        // recipeItems.classList.add("blur");
      } else {
        // console.log("screen under 745");
        overlayModal.classList.toggle("mobileOverlay");
      }

      mainContainer.classList.add("blur");

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
        document.body.style.position = "static";

        console.log("location after X", scrollLocation);

        //? MAIN ISSUE OF MODAL SCROLL LOCATION
        mainContainer.style.top = `-${scrollLocation}px`;

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
          document.body.style.position = "static";

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

//? Are the Numbers Equal?

// function isSameNum(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isSameNum(8, "8"));

//? Profitable Gamble

// function profitableGamble(prob, prize, pay) {
//   if (prob * prize > pay) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(profitableGamble(0.9, 1, 2));

//? check empty string
// function isEmpty(empty) {
//   if (empty === "") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty(" "));

//? Multiple of 100

// function divisible(a) {
//   if (a % 100 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(divisible(1000));

//? Evaluate an Equation
//! Do not use to evaluate numbers as Javascript does this on its own
// function eq(str) {
//   return eval(str);
// }

// console.log(eq("2+2"));

//? Recursion: Length of a String

// function length(str) {
//   return str.length;
// }

// console.log(length("hello"));

//? Return the Next Number from the Integer Passed

// function addition(num) {
//   return (num += 1);
// }

// console.log(addition(5));

//? Reverse an Array

// function reverse(arr) {
//   return arr.reverse();
// }

// console.log(reverse([5, 4, 3, 2, 1]));

//? Name Greeting!
//* Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

// consthelloName = (name) => `Hello ${name}`;

// console.log(helloName("Nathan"));

//? Using Ternary Operators
// condition ? condition_if_true : condition_if_false

// let yeah_nope = (bool) => {
//   return bool ? "yeah" : "nope";
// };

// console.log(yeah_nope(false));

//? Flip the Boolean

// const flipBool = (bool) => bool ? 0 : 1;

// console.log(flipBool(false));

//? Divides Evenly

// const dividesEvenly = (a, b) => (a % b === 0 ? true : false);

// console.log(dividesEvenly(85, 4));

//? Return Last Element in Array

// const getLastItem = (arr) => arr[arr.length - 1];
//! or
// const getLastItem = (arr) => arr.pop();

// cl(getLastItem([1, 2, 3, 4]));

//? Concatenating Two Integer Arrays

// const concat = (arr1, arr2) => arr1.concat(arr2);
// or
// const concat = (arr1, arr2) => [...arr1, ...arr2];

// console.log(concat([1, 2, 3], [4, 5, 6]));

//? Find the Index (Part 1)

// const search = (arr, num) => {
//   if (!num) {
//     num === -1;
//   }
//   return arr.indexOf(num);
// };

// console.log(search([1, 2, 3], 2));

//? Check if Array contains a Given Number

// const check = (arr, num) => arr.includes(num);

// console.log(check([1, 2, 3], 1));

//? Compare Strings by Count of Characters

// const comp = (str1, str2) => str1.length === str2.length;

// cl(comp("AB", "CDE"));

//? To The Power of ___

// const calculateExponent = (num, exp) => Math.pow(num, exp);

// cl(calculateExponent(5, 5));

//? Find the Bug: Returning the Container

// const getContainer = (item) => {
//   switch (item) {
//     case "bread":
//       return "bag";
//       break;
//     case "beer":
//       return "bottle";
//       break;
//     case "candy":
//       return "plastic";
//       break;
//     case "cheese":
//       return null;
//       break;
//     default:
//       cl("choose Bread, beer, candy or cheese");
//   }
// };

//! or

// function getContainer(product) {
//   return {
//     Eggs: "carton",
//     Milk: "bottle",
//     Bread: "bag",
//     Beer: "bottle",
//     Candy: "plastic",
//     Cheese: null,
//   }[product];
// }

// cl(getContainer("Eggs"));

//? ES6: Destructuring Arrays I

// const arr = [1, 2, 3, 4, 5];

// let [a, b] = arr;

// cl(b);

//? Hiding the Card Number ***********************
//! Important to learn

// const cardHide = (num) => {
//   let last4Digits = num.slice(-4);
//   maskedNumbs = last4Digits.padStart(num.length, "*");
//   return maskedNumbs;
// };

// cl(cardHide("123123123123123"));

//? Find the Index (Part 2)

// const search = (arr, item) => arr.indexOf(item);

// console.log(search([1, 2, 3, 4], 5));

//? Squares and Cubes

// const checkSquareAndCube = ([item1, item2]) =>
//   Math.sqrt(item1) === Math.cbrt(item2);

// cl(checkSquareAndCube([4, 8]));

//? Is the Number Even or Odd?

// const isEvenOrOdd = (num) => (num % 2 == 0 ? "Even" : "Odd");

// cl(isEvenOrOdd(4));
// cl(isEvenOrOdd(3));

//? Is the Last Character an N?

// const isLastCharacterN = (name) => {
//   let arr = name.split("");
//   return arr[arr.length - 1] === "n" ? true : false;
// };

// cl(isLastCharacterN("Nathan"));

//? Extract City Facts

// const cityFacts = (obj) => {
//   return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;
// };

// cl(
//   cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe",
//   })
// );

//? Volume of a Box

// const volumeOfBox = (obj) => {
//   return obj.width * obj.length * obj.height;
// };

// cl(volumeOfBox({ width: 2, length: 5, height: 1 })); // 10

//? Default Mood

// const moodToday = (mood) => {
//   if (mood) {
//     return `Today, I am feeling ${mood}`;
//   } else {
//     return "Today, I am feeling neutral";
//   }
// };

//! or

// const moodToday = (mood) => `Today, I am feeling ${mood || "neutral"}`;

// cl(moodToday("happy"));

//? Concatenate First and Last Name into One String

// const concatName = (firstName, lastName) => lastName.concat(`, ${firstName}`);

// cl(concatName("first", "last"));

//? Is the Word Singular or Plural?

// const isPlural = (word) => word[word.length - 1] === "s";

//! or

// const isPlural = (word) => word.endsWith("s");

//! or

// const isPlural = (word) => word.substring(word.length - 1) === "s";

// cl(isPlural("changes"));

//? Find the Index

// const findIndex = (arr, str) => arr.indexOf(str);

//! or

// const findIndex = (arr, str) => arr.findIndex((val) => val === str);

// cl(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); //2

//? ES6: Destructuring Objects VIII

// const user = {
//   name: "Billy",
//   email: "Billy@example.com",
//   city: "Phoenix",
//   state: "AZ",
//   country: "USA",
// };

// const str = `({ name, email, rest = {city: "Phoenix", state: "AZ", country: "USA"}} = user ).toString()`;

//! or (Better)

// const str = `({ name, email, ...rest} = user ).toString()`;

// cl(str);

//? Map out an array(10) of random numbers from (1-200)
//! Sort Array from lowers to highest.

// let eggsInNest = new Array(10).fill(null);
// eggsInNest = eggsInNest.map(() => Math.floor(Math.random() * 200) + 1);
// cl(eggsInNest);
// eggsInNest.sort((a, b) => a - b);
// cl(eggsInNest);

//? Map an array that doubles the output of the array

// let arr = [1, 2, 3, 4, 5];

// let mapped = arr.map((x) => {
//   return x * 2;
// });

// cl(mapped);

//? Create an array of null values, replace null with random numbers.

// let newArray = new Array(5).fill(null);
// cl(newArray);

// newArray.map((item) => {
//   item = Math.floor(Math.random() * 100) + 1;
//   newArray.push(item);
//   newArray.splice(0, newArray.length - 5);
// });
// cl(newArray);

//?

// let h1 = document.querySelector("h1");
// let inner = h1.innerHTML;
// cl(h1.textContent);
// cl(inner);

//? ------ Free Code Camp ------
//? Working with Objects

// function phoneticLookup(val) {
//   let result = "";
//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   };

//   result = lookup[val];
//   return result;
// }

// phoneticLookup("charlie");
// console.log(phoneticLookup("charlie"));

//? Testing Objects for PropertiesPassed

// function checkObj(obj, checkProp) {
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
// }

// var obj1 = {
//   top: "hat",
//   bottom: "pants",
// };

// console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"));

//? Record Collection
//! This was not as easy as I thought. Need to work on Objects more

// const collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     album: "ABBA Gold",
//   },
// };

// Only change code below this line
// function updateRecords(id, prop, value) {
//   id = collection[id];

//*  --- My Way ---
// if (prop !== "tracks" && value !== "") {
//   id[prop] = value;
// } else if (prop === "tracks" && value !== "") {
//   id.hasOwnProperty("tracks") ? id.tracks.push(value) : (id.tracks = [value]);
// } else if (prop === "tracks" && value === "") {
//   delete id[prop];
// } else if (prop === "artist" && value === "") {
//   delete id[prop];
// } else if (prop === "album" && value !== "") {
//   id[prop] = value;
// }

//*  --- Cleaner way ---
// if (value === "") {
//   delete id[prop];
// } else {
//   if (prop !== "tracks") {
//     id[prop] = value;
//   } else {
//     id.hasOwnProperty("tracks")
//       ? id.tracks.push(value)
//       : (id.tracks = [value]);
//   }
// }

//   return collection;
// }

//*  --- Testing ---
// updateRecords(5439, "tracks", "ABBA");
// console.log(updateRecords(5439, "artist", "ABBA"));
// console.log(updateRecords(5439, "tracks", "Take a Chance on Me")); //'Take a change on me' (last element)
// console.log(updateRecords(2548, "artist", "")); // artist should not be set
// console.log(updateRecords(1245, "tracks", "Addicted to Love")); // tracks should have "addicted to love"
// console.log(updateRecords(2468, "tracks", "Free")); // tracks should have 1999
// console.log(updateRecords(2548, "tracks", "")); // tracks should not be set
// console.log(updateRecords(1245, "album", "Riptide")); // album should be "riptide"

//? Iterate though array
// var myArr = [2, 3, 4, 5, 6];

// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   console.log((total += myArr[i]));
// }
// console.log("total", total);

//? Nested for loops

// function multiplyAll(arr) {
//   let product = 1;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );
// console.log(multiplyAll([[1], [2], [3]]));

//? Replace Loops using Recursion

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

arr1 = [1, 2, 3, 4, 5];

// console.log(multiply(arr1, 4));

let add = function (n) {
  if (n <= 0) {
    return 1;
  } else {
    return n + add(n - 1);
  }
};

console.log(add(4));

4 + add(3);
4 + 3 + add(2);
4 + 3 + 2 + add(1);
4 + 3 + 2 + add(0);
// 4 + 3 + 2 + 0 = 9
