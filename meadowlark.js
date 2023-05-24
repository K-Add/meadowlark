const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.send('home')
})

app.get('/about', (req, res) => {    
    res.send('about')})

app.use((req, res) => {
    res.status(404)
    res.send('404')
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500)  
    res.send('500')
})


app.listen(port, () => {
    console.log(`express started on http://localhost:${port};
    press Ctrl-C to terminate.
    `)
})