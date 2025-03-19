const apiKey = '41c29fce16e3803b531cf731dc8fc046'; // Replace with your actual API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weatherInfo = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherInfo").innerHTML = weatherInfo;
    } else {
      document.getElementById("weatherInfo").innerHTML = "<p>City not found. Please try again.</p>";
    }
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = "<p>Error fetching data. Please try again later.</p>";
  }
}
