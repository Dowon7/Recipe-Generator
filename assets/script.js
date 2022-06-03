
function fetchRecipes() {
    // API request for USDA food list
    $.getJSON("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=nZxmwjSMlpgFxlnvqEMSLAhOnpHCFmRxENBsiGIA", function(data){
    
        console.log(data);
    
    });

}

const ingredientSearchButton = document.getElementById("ingredientSearchButton");
ingredientSearchButton.addEventListener("click", fetchRecipes);