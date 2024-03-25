// document.addEventListener("DOMContentLoaded", function () {
//     const apiKey = '14382b538c8695763727ed900dd07677'; // Replace with your OpenWeatherMap API key
//     const countrySelect = document.getElementById('country-select');
//     const weatherInfo = document.getElementById('weather-info');
  
//     countrySelect.addEventListener('change', function () {
//       const countryCode = this.value;
//       getWeather(countryCode);
//     });
  
//     function getWeather(countryCode) {
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryCode}&appid=${apiKey}&units=metric`)
//         .then(response => response.json())
//         .then(data => {
//           const temperature = data.main.temp;
//           const description = data.weather[0].description;
//           weatherInfo.innerHTML = `Current temperature: ${temperature}°C, Description: ${description}`;
//         })
//         .catch(error => {
//           console.error('Error fetching weather data:', error);
//           weatherInfo.innerHTML = 'Error fetching weather data';
//         });
//     }
  
//     // Default to the first country on page load
//     getWeather(countrySelect.value);
//   });
  
const Key = '7b70ff554038e9d237eaee41e3474f4b'

const getData=async (city)=>{
  const base='https://api.openweathermap.org/data/2.5/weather'
  const query=`?q=${city}&units=matric&appid=${Key}`

  const req=await fetch(base+query)
  const data =await req.json()
  console.log(req);
  return data
}
getData()
