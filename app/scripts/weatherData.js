/**
 * @function GetWeatherData
 * Get weather data for a specific location using openweathermap.
 * @param {lat} - Latitude coordinate
 * @param {lon} - Longitude coordinate.
 * @return {data} - The data returned from the API request.
 */
async function GetWeatherData(lat, lon) {
  const API_KEY = "65f61374e3ecc51440b6f1ddfccf8064";

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`
  ).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);
        return data;
      });
    } else {
      console.log("error");
      return {};
    }
  });
}

export default GetWeatherData;
