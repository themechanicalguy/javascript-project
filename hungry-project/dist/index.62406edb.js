const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const showRecipe = async ()=>{
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        // console.log('-->', res);
        const data = await res.json();
        // console.log(data);
        let { recipe  } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
        if (!data.ok) throw new Error(`${data.message} (${res.status})`);
    } catch (err) {
        console.log(err.message);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
