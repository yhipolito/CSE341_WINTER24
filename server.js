const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello Yazel");
});

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
