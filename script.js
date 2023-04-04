const temperature = document.getElementById('temperature')
const place = document.getElementById('place')
const searchInp = document.getElementById('Search')
let searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', (e)=>{
  e.preventDefault()
   const fetchUrl = `https://goweather.herokuapp.com/weather/${searchInp.value}`
  fetch(fetchUrl).then((response) =>{ 
   return response.json()
 }).then((data) => {
        place.innerHTML = `place : ${searchInp.value}`
        temperature.innerHTML = `temperature : ${data.temperature}` })
  .catch((error)=>{
        temperature.innerHTML = `error : ${error.message}`
  })
})