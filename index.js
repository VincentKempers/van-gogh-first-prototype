const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/selection', (req, res) => {
	res.render('selection');
});
<<<<<<< HEAD

app.get('/chosen', (req, res) => {
	res.render('chosen');
});
=======
>>>>>>> 9b4d9b4182a9f067a9d8d56739c79c30821aa9d8

app.listen(4044, () => {
	console.log('app runs at http://localhost:4044');
});
