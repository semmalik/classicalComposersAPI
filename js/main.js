document.querySelector('button').addEventListener('click', getQuery)


function getQuery() {
	const query = document.querySelector('input').value
	document.querySelector('h2').innerText = query
	console.log(query)

}