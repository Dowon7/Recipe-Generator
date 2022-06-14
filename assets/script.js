/*
let ingredientCount = 0;
let ingredientArray = [];
let recipeList = [];

function fetchRecipes() {
    // API request for USDA food list
    $.getJSON("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=nZxmwjSMlpgFxlnvqEMSLAhOnpHCFmRxENBsiGIA", function (data) {

        console.log(data);

        for (var i = 0; i < data.length; i++) { // for loop to test parsing info *.description*
            console.log(data[i].description);
        }

    });
}

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

// Testing my new branch hihi 

function fetchSpoon() {

    $.getJSON("https://api.spoonacular.com/recipes/complexSearch?apiKey=f1ff032dbf3e458ea914a1c136a78dcc", function (data) {

        console.log(data);

    });
}

function randomRecipes() {
    $.getJSON("https://api.spoonacular.com/recipes/random?apiKey=f1ff032dbf3e458ea914a1c136a78dcc", function (data) {

        console.log(data);

    })
}

// ADDING LEO CODE

// function getIngredient() {
// 	const ingredientEls = $(".ingredient-input");
// 	console.log(ingredients)
// 	//single responsibility
//     // block scope 
//     const ingredients = ingredientEls.map(ingredientEl => console.log(ingredientEl));
// }

document.getElementById('ingredient-input').addEventListener("keypress", function (event) {
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
    delButton.attr("aria-label", "Close");
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
    ingredientCount += 1;
    return delButton;

}

function removeIngredient(event) {
    let number = event.target;
    console.log(number.getAttribute("item-count"));
    console.log(event.target);
    const removedItem = $(`.${number.getAttribute("item-count")}`);
    removedItem.remove();
    ingredientArray[number.getAttribute("item-count")] = null;
    console.log(ingredientArray);
}

function recipeFinder() {
    const filtered = ingredientArray.filter(function (el) {
        return el != null;
    });
    searchRecipe(filtered.join(", "));
}

function searchRecipe(keyWords) {
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
    })
}

function displayRecipe(recipeList) {
    var recipe1 = $(".card1-img-top");
    recipe1.attr("src", recipeList[0].image); // 1st.
    var label1 = $(".card-title1");
    label1.text(recipeList[0].title);

    var recipe2 = $(".card2-img-top");
    recipe2.attr("src", recipeList[1].image); // 2nd.
    var label2 = $(".card-title2");
    label2.text(recipeList[1].title);

    var recipe3 = $(".card3-img-top");
    recipe3.attr("src", recipeList[2].image); // 3rd.
    var label3 = $(".card-title3");
    label3.text(recipeList[2].title);
}

function resetFind() {
    $(".list-group-item").remove();
    ingredientCount = 0;
    ingredientArray = [];
    recipeList = [];
}

// function fetchRecipes() {
//     // API request for USDA food list
//     $.getJSON("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=nZxmwjSMlpgFxlnvqEMSLAhOnpHCFmRxENBsiGIA", function(data){

//         console.log(data);

//     });

// // }

// const ingredientSearchButton = document.getElementById("ingredientSearchButton");
// ingredientSearchButton.addEventListener("click", fetchRecipes);




//LIGHT DARK MODE START
var themeButtonEl = $('#theme-btn');
var isDark = true;

themeButtonEl.on('click', function () {
    if (isDark) {
        $('body').css({ 'background-color': '#ffffff', color: '#1a1a1a' });
        isDark = !isDark;
    } else {
        $('body').css({ 'background-color': '#1a1a1a', color: '#1a1a1a' });
        isDark = !isDark;
    }
});
//LIGHT DARK MODE END

//SEARCH BAR START
let = searchable = [recipeList];

const searchInput = document.getElementById('item-id');
const searchWrapper = document.querySelector('.d-flex');
const resultsWrapper = document.querySelector('.results');
const searchButton = document.getElementById('searchbtn');

searchButton.addEventListener('click', (e) => {
    console.log('i have been clicked tho');
});

searchInput.addEventListener('keyup', (e) => { // when a key is typed inside search bar
    // console.log(e.target.value);                // log it
    let results = [];
    let input = searchInput.value;

    if (input.length) {
        results = searchable.filter((item) => {
            return item.toString().toLowerCase().includes(input.toString().toLowerCase());
        });
    }

    renderResults(results);
});

function renderResults(results) {
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }

    let content = results.map((item) => {
        return `<li>${item}</li>`
    }).join('');

    searchWrapper.classList.add('show')
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

//SEARCH BAR END
*/

//
//
//
/*
 * Code by Ning.
 */

let recipeList = [];

function displayRecipe(recipeList) {
    var recipe1 = $(".card1-img-top");
    recipe1.attr("src", recipeList[0].image); // 1st.
    var label1 = $(".card-title1");
    label1.text(recipeList[0].title);

    var recipe2 = $(".card2-img-top");
    recipe2.attr("src", recipeList[1].image); // 2nd.
    var label2 = $(".card-title2");
    label2.text(recipeList[1].title);

    var recipe3 = $(".card3-img-top");
    recipe3.attr("src", recipeList[2].image); // 3rd.
    var label3 = $(".card-title3");
    label3.text(recipeList[2].title);
}

// searchRecipe() + the item is the input value.
function searchRecipe() {
    // reset previous list/search (if any).
    // resetFind();

    console.log("Searching recipe...");

    const item = document.getElementById("item-id").value; // egg, ham etc.
    const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=" + item + "&number=10"
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
        // examples: from [] to eggResponse, from eggResponse to hamResponse, and so on...
        recipeList = response; // update list -> response.
        displayRecipe(recipeList);
        // todo: we may not want to reset the list immediately.
        // proposal: we can add a button to reset the 'Find'.
        // Or reset it initially for each search.
        // resetFind();
    })
}

function ShowMissedIngredients() {
    var ingredientOne = $("#ingredient-1");
    ingredientOne.text(recipeList[0].missedIngredients[0].name);

    var ingredientTwo= $("#ingredient-2");
    ingredientTwo.text(recipeList[0].missedIngredients[1].name);
}

function ShowSecondMissedIngredients() {
    var ingredientOne = $("#ingredient2-1");
    ingredientOne.text(recipeList[1].missedIngredients[0].name);

    var ingredientTwo= $("#ingredient2-2");
    ingredientTwo.text(recipeList[1].missedIngredients[1].name);
}

function ShowThirdMissedIngredients() {
    var ingredientOne = $("#ingredient3-1");
    ingredientOne.text(recipeList[1].missedIngredients[0].name);

    var ingredientTwo= $("#ingredient3-2");
    ingredientTwo.text(recipeList[2].missedIngredients[1].name);
}



 

