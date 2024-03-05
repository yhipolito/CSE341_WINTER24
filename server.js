const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1')

// I declare a function inside lesson1.js
// Then I export those two functions
// I call those two functions with variable lesson1Controller
// Then I call each function inside app.get
// app.get receives two arguments
// first "/"
// Then a function

app.get('/', lesson1Controller.yazelRoute);

app.get('/maximo', lesson1Controller.maximoRoute);

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
