let ingredientCount = 0;


function getIngredient() {
	const ingredientEls = $(".ingredient-input");
	console.log(ingredients)
	//single responsibility
    // block scope 
    const ingredients = ingredientEls.map(ingredientEl => console.log(ingredientEl));
}

function addIngredient() {
    let newIngredient = document.getElementById("ingredient-input").value;
    console.log(newIngredient);
    const ingredientEl = $("<li>").addClass("list-group-item list-group-item-action");
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
}

function fetchRecipes() {
    // API request for USDA food list
    $.getJSON("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=nZxmwjSMlpgFxlnvqEMSLAhOnpHCFmRxENBsiGIA", function(data){
    
        console.log(data);
    
    });

}

const ingredientSearchButton = document.getElementById("ingredientSearchButton");
ingredientSearchButton.addEventListener("click", fetchRecipes);