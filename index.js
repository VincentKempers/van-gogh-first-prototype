const express = require('express');


const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(4044, () => {
  console.log("app runs at http://localhost:4044");
})
