const express = require("express");
const fetch = require('node-fetch');
const cors = require('cors')

const app = express();
app.use(cors())

app.get('/users', (req, res) => {
	fetch('https://api.github.com/users/github')
    		.then(res => res.json())
    		.then(json => {
			res.json(json);
			console.log(json)
		});
});

app.get('/jobs', (req, res) => {
	fetch('https://jobs.github.com/positions.json?description=python&location=new+york')
		.then(res => res.json())
		.then(json => {
			res.json(json);
			console.log(json);
		});
});


// listen for requests
app.listen(process.env.PORT || 8080, () =>
  console.log('Your app is listening on port 8080.')
);
