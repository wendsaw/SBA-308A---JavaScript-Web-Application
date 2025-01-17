

const cityForm = document.querySelector('Form');
const card = document.querySelector('.card');
const details = document.querySelector('.details')

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

    updateCity(city).then(data => updateUI(data))
        .catch(Error => console.log(Error));

    updateCity(city);
});