const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require('path')

app.set('view engine', 'pug')
// app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false })); //Automating body parsing
app.use(express.static(path.join(__dirname, 'public')))

// app.use((req, res, next) => { // This is a middleware
//                               // It executes the logic before
//console.log('lol')             // calling the next() function
//     next()                    // and passing control to the
// })                            // app.use() below


app.use('/admin', adminData.routes)
app.use(shopRoutes)

//Placed after other paths so if wrong path entered in browser the ones above
//can't handle the path so it will reach this code and display a 404 page.
app.use((req, res) => {
    // res.status(404).sendFile(path.join(__dirname,'views', 'page-not-found.html'))
    res.render('404')
})

const PORT = process.env.PORT;

app.listen(PORT || 3200);
