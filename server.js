const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const composers = {
	'mozart' : {
	'fullName' : 'Wolfgang Amadeus Mozart',
	'birthLocation' : 'Salzburg, Austria',
	'birthday' : '27 January 1756',
	'death' : '5 December 1791',
	'period' : 'Classical',
	'notableWorks' : 'The Marriage of Figaro, The Magic Flute, the Jupiter Symphony'
	},
	'beethoven' : {
	'fullName' : 'Ludwig van Beethoven',
	'birthLocation' : 'Bonn, Germany',
	'birthday' : '17 December 1770',
	'death' : '26 March 1827',
	'period' : 'Classical into Romantic',
	'notableWorks' : '9th Symphony'

	},
	'liszt' : {
	'fullName' : 'Franz Liszt',
	'birthLocation' : 'Doborján, Kingdom of Hungary',
	'birthday' : '22 October 1811',
	'death' : '31 July 1886',
	'period' : 'Romantic',
	'notableWorks' : 'Hungarian Rhapsody'
	},
	'chopin' : {
	'fullName' : 'Frédéric François Chopin',
	'birthLocation' : 'Żelazowa Wola in the Duchy of Warsaw',
	'birthday' : '1 March 1810',
	'death' : '17 October 1849',
	'period' : 'Romantic',
	'notableWorks' : 'Minute Waltz'
	},
	'bach' : {
	'fullName' : 'Johann Sebastian Bach',
	'birthLocation' : 'Eisenach, present day Germany',
	'birthday' : '31 March 1685',
	'death' : '28 July 1750',
	'period' : 'Baroque',
	'notableWorks' : 'Toccata and Fugue in D minor, along with the Brandenburg Concertos'
	},
	'tchaikovsky' : {
	'fullName' : 'Pyotr Ilyich Tchaikovsky',
	'birthLocation' : 'Votkinsk, Vyatka Governorate (present-day Udmurtia) in the Russian Empire',
	'birthday' : '7 May 1840',
	'death' : '6 November 1893',
	'period' : 'Romantic',
	'notableWorks' : 'The ballets Swan Lake and The Nutcracker'
	},
	'unknown' : {
	'fullName' : 'unknown',
	'birthLocation' : 'unknown',
	'birthday' : 'unknown',
	'death' : 'unknown',
	'period' : 'unknown',
	'notableWorks' : 'unknown'
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

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is now running on PORT ${PORT}`)
})
