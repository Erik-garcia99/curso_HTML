//creamos un array vacio 

let recipes = []

let recipe1 ={
    name : "Spaghetti Carbonara",
    ingredients : ["spaghetti","Parmesan cheese", "pancetta", "black pepper"],
    cookingTime : 22,
    totalIngredients : null,
    difficultyLevel : ""
}

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
};

const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
};



recipes.push(recipe1,recipe2,recipe3);
console.log(recipes);


function getTotalIngredients(ingredients){
    return ingredients.length;
}

function getDifficultyLevel(time){
    
    if(time <= 30){
        return "easy";
    }
    else if(time <=60){
        return "medium";
    }
    else{
        return "hard"
    }
}

let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

//recipe2

let recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
console.log(recipe2TotalIngredients);

let recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
console.log(recipe2DifficultyLevel);

recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;


//recipe3

let recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(recipe3TotalIngredients);

let recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe3DifficultyLevel);

recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;

console.log(recipes);