const express = require('express')
const app = express()
const path = require('path')
const port = 8080
const urllib = require('urllib')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/recipes/:ingredient', (req, res) =>{
     let wantedIngredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${wantedIngredient}`,
    function (err, data) {
       if (err) {
           throw err;
       }
       
       res.send(data)
       })
      
   }
 )

app.get('/sanity', (req, res) => {
  res.send('ok')
})







app.listen(port, () => console.log(`Example app listening on port ${port}!`))
