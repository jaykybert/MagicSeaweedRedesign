/**
 * @function GetWeatherData
 * Get weather data for a specific location using openweathermap.
 * @param {lat} - Latitude coordinate
 * @param {lon} - Longitude coordinate.
 * @return {data} - The data returned from the API request.
 */
function GetWeatherData(location) {
  const API_KEY = "65f61374e3ecc51440b6f1ddfccf8064";

  /*
  let resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  );

  let data = await resp.json();
  return data;

  */
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  ).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log("Data received");
        return data;
      });
    } else {
      console.log(response.toString());
      return {};
    }
  });
}

export default GetWeatherData;
