const express = require('express')
const jsx = require('jsx-view-engine')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', jsx())

// allows the app to get data from an html form
app.use(express.urlencoded({ extended: false }))

const pokemon = require('./models/pokemon.js')

/*
    app.METHOD(ENDPOINT, MIDDLEWARE)

    Middleware function

        (req, res, next*) => {}
*/

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
    
});

app.get('/pokemon', (req, res) => {
    res.render('Index.jsx', { pokemon })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New.jsx')
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show.jsx', { p: pokemon[req.params.id] })
})

app.post('/pokemon/new', (req, res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

const PORT = 4321
app.listen(PORT, ()=>{
    console.log(`Now listening on port ${PORT}. http://localhost:${PORT}`)
})