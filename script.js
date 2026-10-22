// Get the form and suggestion area from the page.
const weatherForm = document.querySelector('#weatherForm');
const suggestion = document.querySelector('#suggestion');

// Listen for the user submitting the form.
weatherForm.addEventListener('submit', function (event) {
	event.preventDefault();

	// Get the weather selected by the user.
	const weather = document.querySelector('#weather').value;
	const temperature = Number(document.querySelector('#temperature').value);
	let message = '';

	// Display a message about what to bring.
	if (weather === 'sunny') {
		message = 'It\'s sunny! Bring sunglasses and sunscreen. ☀️🕶️';
	} else if (weather === 'cloudy' || weather === 'rainy') {
		message = `It's ${weather}! A light jacket might be a good idea. ☁️🌧️🧥`;
	} else if (weather === 'snowy') {
		message = 'It\'s snowy! Bring a warm coat and boots. ❄️🧥🥾';
	} else if (weather === 'windy') {
		message = 'It\'s windy! Bring a jacket. 💨🧥';
	}

	// Add a warm jacket suggestion when the temperature is below 50°F.
	if (document.querySelector('#temperature').value !== '' && temperature < 50) {
		message += ' It is below 50°F, so wear a warm jacket. 🧥';
	}

	suggestion.innerHTML = `<p>${message}</p>`;
});
