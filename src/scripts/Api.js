const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "RS2MBT4GHBD67MDJEYWR7DBVR";

function currentData(data) {
  const todayData = {
    resolvedAddress: data.resolvedAddress,
    currentConditions: {
      temp: data.currentConditions.temp,
      humidity: data.currentConditions.humidity,
      windSpeed: data.currentConditions.windspeed,
      description: data.currentConditions.conditions,
      time: data.currentConditions.datetime,
      icon: data.currentConditions.icon,
    },
  };
  return todayData;
}

export async function fetchData(city) {
    const response = await fetch(
      `${BASE_URL}${city}?unitGroup=us&key=${API_KEY}`,
      { mode: "cors" }
    );
    const data = await response.json();
    const cityData= currentData(data);
    return cityData;
}