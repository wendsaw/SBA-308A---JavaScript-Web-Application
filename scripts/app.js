

const cityForm = document.querySelector('Form');
const card = document.querySelector('.card');
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const cityData = document.querySelector('.list-group')


const updateUI = (data) => {
    // const cityDets=data.cityDets;
    // const weather=data.weather;
    const { cityDets, weather } = data;
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.weatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`
    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'Picture/daytime.jpg'
    } else {
        timeSrc = 'Picture/nighttime.jpg'
    }
    time.setAttribute('src', timeSrc)
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }


}
const updateCity = async (city) => {

    console.log(city);

    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets: cityDets,
        weather: weather

    }

}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city).then(data =>{ updateUI(data)
    console.log(data.cityDets)

    cityData.innerHTML = `

      <li class="list-group-item list-group-item-primary">Country Name:${data.cityDets.Country.LocalizedName}</li>
      <li class="list-group-item list-group-item-secondary">Geo Position</li>
      <li class="list-group-item list-group-item-success">City Name</li>
      <li class="list-group-item list-group-item-danger">Primary Zip Code</li>
      <li class="list-group-item list-group-item-warning">Region</li>
      <li class="list-group-item list-group-item-info">Time Zone</li>
      <li class="list-group-item list-group-item-light">Administrative Data</li>
      <li class="list-group-item list-group-item-dark">Country Key</li>
    `

    })
    

        .catch(Error => console.log(Error));

    
        
        

        


});