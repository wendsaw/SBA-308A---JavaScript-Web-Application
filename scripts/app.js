

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

      <li class="list-group-item list-group-item-primary"><h5>Country Name:</h5>${data.cityDets.Country.LocalizedName}</li>
      <li class="list-group-item list-group-item-secondary"><h5>Geo Position:</h5>( Latitude: ${data.cityDets.GeoPosition.Latitude}, Longitude: ${data.cityDets.GeoPosition.Longitude}, Elevation: ${data.cityDets.GeoPosition.Elevation.Metric.Value}${data.cityDets.GeoPosition.Elevation.Metric.Unit})</li>
      <li class="list-group-item list-group-item-success"><h5>English Name:</h5> ${data.cityDets.EnglishName}</li>
      <li class="list-group-item list-group-item-danger"><h5>Primary Zip Code:</h5>${data.cityDets.PrimaryPostalCode}</li>
      <li class="list-group-item list-group-item-warning"><h5>Region:</h5>${data.cityDets.Region.LocalizedName}</li>
      <li class="list-group-item list-group-item-info"><h5>Time Zone</h5>${data.cityDets.TimeZone.Code}</li>
      <li class="list-group-item list-group-item-light"><h5>Administrative Data:${data.cityDets.AdministrativeArea.ID}</h5></li>
     
    `

    })
    

        .catch(Error => console.log(Error));

    
        
        

        


});