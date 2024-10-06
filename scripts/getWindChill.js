const temp = 24;
const wind = 5;
const windChill = document.getElementById("wind-chill");
windChill.textContent = getWindChill(temp, wind);

function getWindChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
        return (35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)).toFixed(2) + "°C";
    } else {
        return "N/A";
    }
}
