const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function() {
    const cityName = document.getElementById('city-name').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=7c5fd8718e21dc06e2f07e277a52fc69')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const cityName = data.name;
            const tem = data.main.temp;
            const temp = tem - 273.15;
            const description = data.weather[0].description;
            document.getElementById("city").innerText = cityName;
            document.getElementById("temperature").innerText = temp.toFixed(2);
            document.getElementById("condition").innerText = description;
            // set weather icon
            const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const imgIcon = document.getElementById('weather-icon');
            imgIcon.setAttribute('src', url);
        })
})