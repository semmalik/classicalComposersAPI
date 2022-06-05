const express = require('express')
const app = express()
const PORT = 8000

const composers = {
	'mozart' : {
	'fullName' : 'Wolfgang Amadeus Mozart',
	'birthLocation' : 'Salzburg, Austria',
	'birthday' : '27 January 1756',
	'death' : '5 December 1791',
	'period' : 'Classical'
	},
	'beethoven' : {
	'fullName' : 'Ludwig van Beethoven',
	'birthLocation' : 'Bonn, Germany',
	'birthday' : '17 December 1770',
	'death' : '26 March 1827',
	'period' : 'Classical into Romantic'

	},
	'liszt' : {
	'fullName' : 'Franz Liszt',
	'birthLocation' : 'Doborján, Kingdom of Hungary',
	'birthday' : '22 October 1811',
	'death' : '31 July 1886',
	'period' : 'Romantic'
	},
	'chopin' : {
	'fullName' : 'Frédéric François Chopin',
	'birthLocation' : 'Żelazowa Wola in the Duchy of Warsaw',
	'birthday' : '1 March 1810',
	'death' : '17 October 1849',
	'period' : 'Romantic'
	},
	'bach' : {
	'fullName' : 'Johann Sebastian Bach',
	'birthLocation' : 'Eisenach, present day Germany',
	'birthday' : '31 March 1685',
	'death' : '28 July 1750',
	'period' : 'Baroque'
	},
	'tchaikovsky' : {
	'fullName' : 'Pyotr Ilyich Tchaikovsky',
	'birthLocation' : '',
	'birthday' : '',
	'death' : '',
	'period' : ''
	}
}



app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (request, response) => {
	response.sendFile(__dirname + '/js/main.js')
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
