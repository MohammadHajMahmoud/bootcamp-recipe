const renderer = new Renderer();
const getRecipes = function () {

    $(".recipes-container").empty()
    const recipeName = $("input").val()
    $.get(`/recipes/${recipeName}`, function (data) {
        renderer.renderRecipe(data)
    })
}
$(".recipes-container").on("click", ".recipeImage", function () {
    alert($(this).siblings('ul').children('li').first().text());
});
