import { fetchData } from "./Api";
const weatherResult = document.querySelector("#weather-result");
const city = document.getElementById("city");
const form = document.querySelector("form");


async function hola(town) {
  fetchData(town).then((data) => {
    weatherResult.innerHTML = ""; // Clear previous results
    console.log(data.currentConditions.temp);
    const cityName = document.createElement("h2");
    cityName.textContent = data.resolvedAddress;
    weatherResult.appendChild(cityName);

    const icon = data.currentConditions.icon;
    const iconUrl = `imgs/${icon}.png`;
    const img = document.createElement("img");
    img.src = iconUrl;
    img.alt = "Weather Icon";
    weatherResult.appendChild(img);

    const temp = document.createElement("h3");
    temp.textContent = `${farenheitToCelsius(data.currentConditions.temp)}°C`;
    weatherResult.appendChild(temp);


    const description = document.createElement("p");
    description.textContent = `${data.currentConditions.description}`;
    weatherResult.appendChild(description);

    const time = document.createElement("p");
    time.textContent = `${data.currentConditions.time}`;
    weatherResult.appendChild(time);
    
  });
}
function farenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = city.value;
  console.log(cityValue);
  hola(cityValue)
});


export { hola };
