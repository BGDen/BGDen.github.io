const dom = {
  title : document.querySelector('.title'),
  img : document.querySelector('.img'),
  temperature : document.querySelector('.temperature'),
  otherInfo : document.querySelector('.other'),
  future : document.querySelector('.future')
};


function getWeatherToday() {
fetch(`https://api.weatherstack.com/current?access_key=7dea5fc363b011454a6761505ec0092f&query=fetch:ip&units=m`)
  .then(response => response.json())
  .then(result => renderToday(result));
}

function getWeatherFuture(lat, lon) {
fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=1674a1e8ed045c095ef95328eacb8f96&units=metric&lat=${lat}&lon=${lon}`)
  .then(response => response.json())
  .then(result => renderFuture(result));
} 

function renderToday(data) {
  let date = data.location.localtime.split(' ');
      date[0] = date[0].split('-').reverse().join('.');
      date = date.reverse().join(' ');
      dom.title.innerHTML = `<p><strong>${data.location.name}, ${data.location.country}</strong></p><p>${date}</p>`;
      dom.img.setAttribute('src', data.current.weather_icons[0]);
      dom.temperature.innerHTML = `<p>${data.current.temperature} &deg;C</p>`;
      dom.otherInfo.innerHTML =   `<p>Wind: ${data.current.wind_speed} kph</p>
                                <p>Precip: ${data.current.precip} mm</p>
                                <p>Pressure: ${data.current.pressure} mb</p>`;
  getWeatherFuture(data.location.lat, data.location.lon);
}

function renderFuture(data) {
  let arrDay = [];
      for (let i = 7; i < data.list.length; i += 8){
        arrDay.push(data.list[i]);
}
  [...dom.future.children].forEach((el, i)=>{
    const date = new Date(arrDay[i].dt_txt);
          el.children[0].innerHTML = getWeekDay(date.getDay());
          el.children[1].innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
          el.children[2].setAttribute('src', `http://openweathermap.org/img/wn/${arrDay[i].weather[0].icon}@2x.png`);
          el.children[3].innerHTML = `${Math.round(arrDay[i].main.temp)} &deg;C`;
  });
}

function getWeekDay(date){
  const arrWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return arrWeek[date];
}

getWeatherToday();
