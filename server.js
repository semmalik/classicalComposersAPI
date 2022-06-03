const express = require('express')
const app = express()
const PORT = 8000

const composers = {
	'mozart' : {
	'fullName' : 'Wolfgang Amadeus Mozart',
	'birthLocation' : 'Salzburg, Austria',
	'period' : 'classical'
	},
	'beethoven' : {
	'fullName' : 'Ludwig van Beethoven',
	'birthLocation' : 'Bonn, Germany',
	'period' : 'classical'
	},
	'unknown' : {
		'fullName' : 'unknown',
		'birthLocation' : 'unknown',
		'period' : 'unknown'
	}
}



app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
	const composerName = request.params.name.toLowerCase()
	if (composers[composerName]) {
		response.json(composers[composerName])
	}
	response.json(composers['unknown'])
})

app.listen(PORT, () => {
	console.log(`The server is now running on PORT ${PORT}`)
})