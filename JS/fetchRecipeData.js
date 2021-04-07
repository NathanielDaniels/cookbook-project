import Key from './stash.js'

//* ==================================
//? Fetch Recipe Data
//! ======================================
const recipe = document.querySelector(".hover-text > p").innerText

export default async function getRecipes() {
  
  const fetchRecipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${Key()}`)
  .then(response => response.json())
  .then(data => data.results)
  .catch(err => console.error(err))
  
  fetchRecipes.map(recipe => console.log("fetched recipes", recipe))

  const recipeTitles = fetchRecipes.map(recipe => recipe.title)
  const recipeTitleArray = document.querySelectorAll(".hover-text > p")

  // console.log("recipeTitleArray", recipeTitleArray.map(item => item))

  console.log("Titles Arr",recipeTitles)
  // console.log(recipeTitleArray)

  for (let i = 0; i < recipeTitleArray.length; i++) {
    const recipeTitleArr = document.querySelectorAll(".allRecipes > .hover-text > p")[i]

    // console.log(recipeTitleArr.innerText = recipeTitles[i])

    // const updateTitle = recipeTitles.innerText += recipeTitles
    // console.log(updateTitle)
  }

  fetchRecipes.map(recipe => {
    // const innerTitle = document.querySelectorAll(".hover-text > p")

    // for (let i = 0; i < innerTitle.length; i++) {
    //   // innerTitle[i].innerText = recipe.title

    //   const recipeTitles = document.querySelectorAll(".allRecipes > .hover-text > p")[i]

    //   recipeTitles.innerText += recipe.title
    //   console.log(recipeTitles)
    //   // console.log("recipe test", recipeTitles)
    // }
   
    // console.log(recipe.title)
    // console.log("tester",[...document.querySelectorAll(".hover-text > p")].map(title => title.innerText += recipe.title));
  })

  //? ============================================================
  // const recipeTitleArr = fetchRecipes.map(recipe => recipe.title)
  // const recipeImgArr = fetchRecipes.map(recipe => recipe.image)

  // const recipes = fetchRecipes.map(recipe => {
  //   const recipeTitleArr = recipe.title
  //   const recipeImgArr = recipe.image
  //   const recipeIdArr = recipe.id
  //   return [recipeIdArr, recipeTitleArr, recipeImgArr]
  // })

  // console.log(recipes)

  // const newRecipes = fetchRecipes.map(recipe => {
  //   const recipeObj = {
  //     id: recipe.id,
  //     title: recipe.title,
  //     image: recipe.image,
  //   }
  //   console.log(recipeObj.title)
  //   return recipeObj
  // })
}


// getRecipes()