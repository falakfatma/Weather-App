const temperature = document.getElementById('temperature')
const place = document.getElementById('place')
const searchInp = document.getElementById('Search')
let searchBtn = document.getElementById('searchBtn')
  // (() => {
  //   const fetchUrl = "https://goweather.herokuapp.com/weather/India"
  //   fetch(fetchUrl).then(response => response.json())
  //     .then(data => console.log(data))

  // })()
searchBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  // alert(`hello`)
   const fetchUrl = `https://goweather.herokuapp.com/weather/${searchInp.value}`
  fetch(fetchUrl).then((response) =>{ 
   return response.json()
 }).then((data) => {
    alert(`helloo`)
    console.log(data)
    console.log(data.temperature)
        place.innerHTML = `place : ${searchInp.value}`
        temperature.innerHTML = `temperature : ${data.temperature}` })
  .catch((error)=>{
        temperature.innerHTML = `error : ${error.message}`
  })
})