const renderer = new Renderer();
const  getRecipes = function (){
    $(".recipe-container").empty()
    const recipeName = $("input").val()
    $.get(`/recipes/${recipeName}`, function (data) {
        console.log(data)
        renderer.renderRecipe(data)

    })
}