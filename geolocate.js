async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '8baef8cffba8344f2c07c745e36b60e8'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'8baef8cffba8344f2c07c745e36b60e8'}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weatherResult');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;

    weatherDiv.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${description}</p>
    `;
}