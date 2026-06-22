/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express')
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('this is the home page');
});

app.get('/about', (req, res) => {
    res.send('this is the about page');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.post('/create-post', (req, res) => {
    const { title, content } = req.body;
    res.redirect(`/home?title=${title}&content=${content}`);
});


app.listen(3000, () => {
    console.log('Running on port:3000');
});