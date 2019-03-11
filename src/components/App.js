import React, {
   Component
} from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';


class App extends Component {
   state = {
      value: "",
      city: "",
      sunrise: "",
      sunset: "",
      date: "",
      temp: "",
      wind: "",
      pressure: "",
      err: false,
   }

   handleImputTextChange = (e) => {
      this.setState({
         value: e.target.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.value.length < 4) return

      if (prevState.value !== this.state.value) {
         const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=3ea28afd564c21b35e429185f88c1c51&units=metric`;
         fetch(API)
            .then(response => {
               if (response.ok) {
                  return response
               }
               throw Error("Nieudane zapytanie")
            })
            .then(response => response.json())
            .then(data => {
               const time = new Date().toLocaleString()
               this.setState({
                  city: this.state.value,
                  sunrise: data.sys.sunrise,
                  sunset: data.sys.sunset,
                  date: time,
                  temp: data.main.temp,
                  wind: data.wind.speed,
                  pressure: data.main.pressure,
                  err: false,

               })
            })

            .catch(err => {
               this.setState({
                  err: true,
                  city: this.state.value,
               })
            })
      }
   }
   // handleSubmitClick = (e) => {
   //    e.preventDefault()
   //    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=3ea28afd564c21b35e429185f88c1c51&units=metric`;
   //    fetch(API)
   //       .then(response => {
   //          if (response.ok) {
   //             return response
   //          }
   //          throw Error("Nieudane zapytanie")
   //       })
   //       .then(response => response.json())
   //       .then(data => {
   //          const time = new Date().toLocaleString()
   //          this.setState({
   //             city: this.state.value,
   //             sunrise: data.sys.sunrise,
   //             sunset: data.sys.sunset,
   //             date: time,
   //             temp: data.main.temp,
   //             wind: data.wind.speed,
   //             pressure: data.main.pressure,
   //             err: false,

   //          })
   //       })

   //       .catch(err => {
   //          this.setState({
   //             err: true,
   //             city: this.state.value,
   //          })
   //       })
   // }

   render() {
      return (
         <div className="App">
            <Form value={this.state.value} zmiana={this.handleImputTextChange} /*submit={this.handleSubmitClick}*/ />
            <Result weather={this.state} />

         </div>
      );
   }
}

export default App;