class Renderer {
    renderRecipe = (data) => {

        const source = $('#recipe-template').html();
        const template = Handlebars.compile(source)
        const somehtml = template({data});
        $(".recipes-container").append(somehtml)
    }
}
