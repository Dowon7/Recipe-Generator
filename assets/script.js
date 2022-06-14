let ingredientCount = 0;
let ingredientArray = [];
let recipeList = [];

// function getIngredient() {
// 	const ingredientEls = $(".ingredient-input");
// 	console.log(ingredients)
// 	//single responsibility
//     // block scope 
//     const ingredients = ingredientEls.map(ingredientEl => console.log(ingredientEl));
// }

document.getElementById('ingredient-input').addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("add-button").click();
    }
  });

function addIngredient() {
    let newIngredient = document.getElementById("ingredient-input").value;
    console.log(newIngredient);
    ingredientArray[ingredientCount] = newIngredient;
    console.log(ingredientArray);
    // const ingredientEl = $("<li>").addClass("list-group-item list-group-item-action");
    const ingridient = $("<span>");
    ingridient.text(newIngredient);
    const delButton = $("<button>").addClass("btn-close");
    delButton.attr("aria-label","Close");
    delButton.attr("item-count", ingredientCount);
    delButton.click(removeIngredient);
    const itemWrapper = $("<div>").addClass("list-item-wrapper");
    itemWrapper.append(ingridient);
    itemWrapper.append(delButton);
    const listItem = $("<li>").addClass(`list-group-item list-group-item-action ${ingredientCount}`);
    listItem.append(itemWrapper);
    const ingredientList = $(".ingredient-list");
    ingredientList.append(listItem);
    document.getElementById("ingredient-input").value = "";
    ingredientCount +=1;
    return delButton;
    
}

function removeIngredient(event){
    let number = event.target;
    console.log(number.getAttribute("item-count"));
    console.log(event.target);
    const removedItem = $(`.${number.getAttribute("item-count")}`);
    removedItem.remove();
    ingredientArray[number.getAttribute("item-count")] = null;
    console.log(ingredientArray);
}

function recipeFinder(){
    const filtered = ingredientArray.filter(function (el) {
        return el != null;
    });
    searchRecipe(filtered.join(", "));
}

function searchRecipe(keyWords){
    const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=" + keyWords + "&number=10"
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "10aec3ffa7mshdac16678f4fa80bp13ac63jsnadcdde4c2a5b"
        }
    };
    $.ajax(settings).done(function (response) {
	console.log(response);
    recipeList = response;
    displayRecipe(recipeList);
    resetFind();
})}

function displayRecipe(recipeList){
    var recipe1 = $(".card1-img-top");
    recipe1.attr("src", recipeList[0].image);
    var label1 = $(".card-title1");
    label1.text(recipeList[0].title);
    var recipe2 = $(".card2-img-top");
    recipe2.attr("src", recipeList[1].image);
    var label2 = $(".card-title2");
    label2.text(recipeList[1].title);
    var recipe3 = $(".card3-img-top");
    recipe3.attr("src", recipeList[2].image);
    var label3 = $(".card-title3");
    label3.text(recipeList[2].title);
}

function resetFind(){
    $(".list-group-item").remove();
    ingredientCount = 0;
    ingredientArray = [];
    recipeList = [];
}

// USDA API
function fetchRecipes() {
    // API request for USDA food list
    $.getJSON("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=nZxmwjSMlpgFxlnvqEMSLAhOnpHCFmRxENBsiGIA", function(data){
    
        console.log(data);
    
    });

}

// Testing my new branch hihi 
