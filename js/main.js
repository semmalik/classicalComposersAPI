document.querySelector('button').addEventListener('click', getQuery)


async function getQuery() {
	const query = document.querySelector('input').value

	const response = await fetch(`/api/${query}`)

	const data = await response.json()

	document.querySelector('h2').innerText = data['fullName']
	document.querySelector('.composerInfo').innerText = `${data['fullName']} was born in ${data['birthLocation']} on ${data['birthday']}.
								This artist wrote music during the ${data['period']} period until their death on ${data['death']}. Most notable 
								works include ${data['notableWorks']}.`

}