import express from 'express';

const app = express();

app.get('/users', (request, response) => {
	response.json([
		"Cleilton",
		"Timoteo"
	]);
});

app.listen(3333);