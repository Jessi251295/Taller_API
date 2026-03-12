const inputBox = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const errormessage = document.querySelector('.error');

async function checkWeather(city) {
    const apiKey = 'f95e741577e9d8d7426bb8fe4d95f3c5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
            errormessage.style.display = 'block';
            weather.style.display = 'none';
            errormessage.querySelector('p').innerText = 'Nombre de ciudad inválido';
            return;
        }

        errormessage.style.display = 'none';
        updateWeatherUI(data);
    } catch (error) {
        console.error(error);
        errormessage.style.display = 'block';
        weather.style.display = 'none';
        errormessage.querySelector('p').innerText = 'Error de conexión';
    }
}

function updateWeatherUI(data) {
    const weatherIcons = {
        Clear: 'images/clear.png',
        Snow: 'images/snow.png',
        Rain: 'images/rain.png',
        Clouds: 'images/clouds.png'
    };

    weatherIcon.src = weatherIcons[data.weather[0].main] || 'images/rain.png';
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

    weather.style.display = 'block';
    
}

// Listeners
searchBtn.addEventListener('click', () => {
    const city = inputBox.value.trim();
    if (city) checkWeather(city);
});

inputBox.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const city = inputBox.value.trim();
        if (city) checkWeather(city);
    }
});



