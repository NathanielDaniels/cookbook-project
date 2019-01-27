<!DOCTYPE html>
<html lang="en">
<head>
  <title>Simone's Recipe Box</title>
</head>
<body>
  <?php

  echo "<p>Data Processed</>";
//   if($_POST['form-submit'] == "submit")
//   {
//     $errorMessage = "";
    
//     if(empty($_POST['recipe-name'])) {
//       $errorMessage .= "<li>You Forgot To Enter A Name!</li>";
//     }
//     if(empty($_POST['ingredient-list'])) {
//       $errorMessage .= "<li>You Forgot To Enter Your List!</li>";
//     }
//     if(empty($_POST['instruction'])) {
//       $errorMessage .= "<li>You Forgot To Enter Your Instructions!</li>";
//     }
//     if(empty($_POST['fav-link'])) {
//       $errorMessage .= "<li>You Forgot To Enter Your Favorite Link!</li>";
//     }

//     $varRecipeName = $_POST['recipe-name'];
//     $varRecipeList = $_POST['ingredient-list'];
//     $varRecipeInstructions = $_POST['instruction'];
//     $varFavoriteLink = $_POST['fav-link'];

//     if(!empty($errorMessage))
//   {
//     echo("<p>There was an error with your form:</p>\n");
//     echo("<ul>" . $errorMessage . "</ul>\n");
//   }
//   else
// {
//   $fs = fopen("mydata.csv","a");
//   fwrite($fs,$varName . ", " . $varRecipeName . "\n");
//   fclose($fs);
//   header("Location: index.html");
//   exit;
// }


?>


<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name

  // To access the data sent with the GET method, you can use $_GET
  // $recipeName = htmlspecialchars($_POST['recipe-name']);
  // $ingredientList  = htmlspecialchars($_POST['ingredient-list']);

  // echo  $recipeName, ' ', $ingredientList;
?>

</body>
</html>

