function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateValues() {
    const humidityElement = document.getElementById('humidity');
    const temperatureElement = document.getElementById('temperature');
    const soilElement = document.getElementById('soil');
    const windElement = document.getElementById('wind');

    humidityElement.textContent = getRandomValue(30, 90);
    temperatureElement.textContent = getRandomValue(15, 35);
    soilElement.textContent = getRandomValue(10, 100);
    windElement.textContent = getRandomValue(1, 100);
}

setInterval(updateValues, 500);