const express = require('express')
const expressHandlebars = require('express-handlebars')
const fortune = require('./lib/fortune')
const handlebars = require('./lib/handlers')

const app = express()

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.get('/', handlebars.home)

app.get('/about', handlebars.about)

app.use(handlebars.notFound)

app.use(handlebars.serverError)


app.listen(port, () => {
    console.log(`express started on http://localhost:${port};
    press Ctrl-C to terminate.
    `)
})