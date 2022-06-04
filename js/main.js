document.querySelector('button').addEventListener('click', getQuery)


async function getQuery() {
	const query = document.querySelector('input').value

	const response = await fetch(`/api/${query}`)

	const data = await response.json()

	console.log(data)

}