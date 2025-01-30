import React, { useState } from 'react'
import './weather.css'
import axios from "axios"

function WeatherApi() {

    const [city, setCity] = useState('')
    const [tcity, settcity] = useState('')
    const [icon, seticon] = useState('')
    const [temperature, settemperature] = useState('')
    const [humidity, sethumidity] = useState('')
    const [wind, setwind] = useState('')

  const checkWeather=async()=>{


    await axios.get(`http://api.weatherapi.com/v1/current.json?key=b5d8d2c5c02e4306961160206253001&q=${city}`)
    .then((response)=>{
        seticon(response.data.current.condition.icon)
        settemperature("Temperature"+response.data.current.temp_c+"C")
        setwind("Wind Speed: "+response.data.current.wind_kph +" km/hr")
        sethumidity("Humidity: "+response.data.current.humidity)
        console.log(response.data)
    })
    settcity(city)
    setCity('')


}
  return (
    <>
    <div className='main'>
        <div className='weather'>
        <h1>Weather app</h1>
        
        <input
              placeholder='search for your city'
              value={city}
              onChange={
                (e)=>setCity(e.target.value)
              }
              />

        
        <button onClick={checkWeather}>Check Weather ji</button>
        
        <h1>{tcity}</h1>
        <img src={icon} width='120'/>

<h1>{temperature}</h1>     
<h1>{wind}</h1>
<h1>{humidity}</h1>

        </div></div></>
  )
}

export default WeatherApi