let weatherLive=document.querySelector("#weatherLive")
let inputSearch=document.querySelector("#inputSearch")
let weatherLives=document.querySelector('#weatherLives')
let weatherLivess=document.querySelector('#weatherLivess')
let allLocation=[]
let allCurrent=[]
let alldate=[]
async function weather(city) {
    let res = await fetch (`http://api.weatherapi.com/v1/forecast.json?key=738a1ad04c124588bb4163333240101&q=${city}&days=3`)
    alldate = await res.json();
    console.log(alldate);
    allLocation=alldate ['location']
    console.log(allLocation);
    allCurrent=alldate['current']
    console.log(allCurrent);
    alldate=alldate['forecast']['forecastday']
    display()
}
weather('cairo')

async function getData() {
  console.log('test')
  let city =inputSearch.value
  await weather(city)

}

function display() {
    let cartona=``;
    for (let i = 0; i < alldate.length; i++) {
      if(i == 0){
        cartona +=`
        <div class="card card-weather col-4">
          <h4 class="fs-3 text-white text-center">${allLocation.localtime}</h4>
          <p class="fs-1  text-white fw-bolder">${allCurrent.temp_c}℃</p>
          <div class='text-center'>
          <img src="${'https:' + allCurrent.condition.icon}" alt="">
        </div>
          <p class="text-white ps-2">${allLocation.name}</p>
          <p class="text-info ps-2">${alldate[i].day.condition.text}</p>
          <div class="text-secondary d-flex  fs-5">
            <span class="p-2"><i class="fa-solid fa-umbrella"></i>20%</span><span class="p-2"><i class="fa-solid fa-wind"></i>18km/h</span><span class="p-2"><i class="fa-regular fa-compass"></i>East</span>
          </div>
        </div>`;
      }else{
        cartona+=` <div class="card card-weather col-4">
        <h4 class="fs-3 text-white text-center">${alldate[i].date}</h4>
        <div class='text-center'>
          <img src="${'https:' + alldate[i].day.condition.icon}" alt="">
        </div>
        <p class="fs-4 text-center pt-3  text-white fw-bolder">${alldate[i].day.maxtemp_c}℃</p>
        <p class="fs-6 text-center pt-3 text-danger fw-bolder">${alldate[i].day.mintemp_c}℃</p>
        <p class="text-info text-center pt-4 ps-2">${alldate[i].day.condition.text}</p>
        <div class="text-secondary d-flex p-2 fs-5">
        
        </div>
      </div>`;
      }     
    console.log(alldate[i])
    
    }
    
    weatherLive.innerHTML=cartona;
}

