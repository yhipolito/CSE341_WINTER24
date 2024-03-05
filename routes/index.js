const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

// I declare a function inside lesson1.js
// Then I export those two functions
// I call those two functions with variable lesson1Controller
// Then I call each function inside app.get
// app.get receives two arguments
// first "/"
// Then a function

routes.get('/', lesson1Controller.tomRoute);
routes.get('/yazel', lesson1Controller.yazelRoute);
routes.get('/maximo', lesson1Controller.maximoRoute);

module.exports = routes;