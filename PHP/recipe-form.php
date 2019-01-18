

<?php
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


?>

