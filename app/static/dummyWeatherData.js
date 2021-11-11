/**
 * @function GetDummyWeatherData
 * Return the current weather data (hard-coded) from the openweathermap API.
 * @returns {data}
 */
export default function GetDummyWeatherData() {
  return data;
}

// ---------- Weather Dummmy Data ---------- //

const data = {
  base: "stations",
  clouds: {
    all: 75,
  },
  cod: 200,
  coord: {
    lat: 50.7205,
    lon: -1.8795,
  },
  dt: 1636478421,
  id: 2655095,
  main: {
    feels_like: 12.3,
    humidity: 82,
    pressure: 1023,
    temp: 12.82,
    temp_max: 13.52,
    temp_min: 11.69,
  },
  name: "Bournemouth",
  sys: {
    country: "GB",
    id: 2008851,
    sunrise: 1636441969,
    sunset: 1636475397,
    type: 2,
  },
  timezone: 0,
  visibility: 10000,
  weather: [
    {
      description: "broken clouds",
      icon: "04n",
      id: 803,
      main: "Clouds",
    },
  ],
  wind: {
    deg: 230,
    speed: 2.57,
  },
};
