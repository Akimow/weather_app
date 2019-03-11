import React from 'react';
import './App.css';
const Result = props => {
   const { err, city,
      sunrise,
      sunset,
      date,
      temp,
      wind,
      pressure } = props.weather

   let content = null;


   if (!err && city) {
      const todaySunrise = new Date(sunrise * 1000).toLocaleTimeString();
      const todaySunset = new Date(sunset * 1000).toLocaleTimeString();
      content = (
         <div className="wyswietlane_dane">
            <h2>Pogoda dla miasta <em> {city}</em></h2>
            <h4>- Temperatura powietrza {temp} &#176;C</h4>
            <h4>- Wschod słonca dzis o {todaySunrise} </h4>
            <h4>- Zachod słonca dzis o {todaySunset} </h4>
            <h4>- Cisnienie atmosferyczne {pressure}hPa </h4>
            <h4>- Sila wiatru {wind}m/s </h4>
            <h4>- Data {date} </h4>
         </div>)
   }
   return (
      <div className="Result">
         {err ? `Nie ma w bazie miasta ${city}` : content}
      </div>

   )

}

export default Result;