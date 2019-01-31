<!DOCTYPE html>
<html lang="en">
<head>
  <title>Simone's Recipe Box</title>
</head>
<body>
   <!--
      a. Integer : Whole Number
      b. Float : Decimal Numbers
      c. String : String or Character
      d. Boolean : True or False
      e. Array : Multiple Items
      f. Object : A Object defined by a Class
-->
<!-- 
   if($_POST['form-submit'] == "submit")
  {
    $errorMessage = "";
    
    if(empty($_POST['recipe-name'])) {
      $errorMessage .= "<li>You Forgot To Enter A Name!</li>";
    }
    if(empty($_POST['ingredient-list'])) {
      $errorMessage .= "<li>You Forgot To Enter Your List!</li>";
    }
    if(empty($_POST['instruction'])) {
      $errorMessage .= "<li>You Forgot To Enter Your Instructions!</li>";
    }
    if(empty($_POST['fav-link'])) {
      $errorMessage .= "<li>You Forgot To Enter Your Favorite Link!</li>";
    }

    $varRecipeName = $_POST['recipe-name'];
    $varRecipeList = $_POST['ingredient-list'];
    $varRecipeInstructions = $_POST['instruction'];
    $varFavoriteLink = $_POST['fav-link'];

    if(!empty($errorMessage))
  {
    echo("<p>There was an error with your form:</p>\n");
    echo("<ul>" . $errorMessage . "</ul>\n");
  }
  else
{
  $fs = fopen("mydata.csv","a");
  fwrite($fs,$varName . ", " . $varRecipeName . "\n");
  fclose($fs);
  header("Location: index.html");
  exit;
}
-->
<!-- 
  $recipeName = $_POST['Recipe-Name'];
    $recipeList = $_POST['List'];
    $recipeInst = $_POST['Instructions'];
    $recipeLink = $_POST['Link'];

    echo $recipeName . "</br>";
    echo $recipeInst . "</br>";
    echo $recipeLink . "</br>";

    $str = <<<EOD
    The Recipe Name is $recipeName. </br> The Recipe List : $recipeList. </br> $recipeName Instructions : $recipeInst. </br> Link to your favorite Recipes Online : $recipeLink.
    EOD;

    echo $str;
-->

 <?php

    /* echo is like console.log but shows to the user.*/
    /* Separate by "." */
    echo "<p>Data Processed</>" . "</br>" . "</br>";

    /* Set the Timezone*/
    date_default_timezone_set('UTC');

    /* Echos the Date

        h : 12 hr format
        H : 24 hr format
        i : Minutes
        s : Seconds
        u : Microseconds
        a : Lowercase AM or PM
        l : Full text for the Day
        F : Full text for the Month
        j : Day of the Month
        S : Suffix for the Day st, nd, rd, etc
        Y : 4 digit year
        e : Timezone

    */

    /* Post the Date */
    echo date('h:i:s:u a, l F jS Y e') . "</br>" . "</br>";
    /* 12hr, Minutes, Seconds, Microseconds, Lower am/pm, Full Day, Full Month, Day of Month + Suffix, 4 Digit Year, Timezone */

    /* ======================================================================= */

    $recipeName = $_POST['Recipe-Name'];
        $recipeList = $_POST['List'];
        $recipeInst = $_POST['Instructions'];
        $recipeLink = $_POST['Link'];

        echo $recipeName . "</br>";
        echo $recipeInst . "</br>";
        echo $recipeLink . "</br>";

        $str = <<<EOD
        The Recipe Name is $recipeName. </br> The Recipe List : $recipeList. </br> $recipeName Instructions : $recipeInst. </br> Link to your favorite Recipes Online : $recipeLink.
        EOD;

        echo $str;
  ?>
  
 



</body>
</html>

