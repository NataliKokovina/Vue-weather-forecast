<template>
  <div id="app">
    <City @submit='getForecast'/>
    <Forecast v-if="forecastWeather[1]" :forecastWeather="forecastWeather" />
  </div>
</template>

<script>
import City from './components/City.vue'
import Forecast from './components/Forecast'
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return {
      today: new Date(),
      forecastWeather: [],
      firstDayForecast: [],
      secondDayForecast: [],
      thirdDayForecast: [],
      fourthDayForecast: [],
      fifthDayForecast: [],
      sixthDayForecast: [],
    }
  },
  components: {
    City,
    Forecast
  },
  methods: {
    nextDay(count) {
      const newDate = new Date (this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + count);
      return newDate.getTime() / 1000;
    },

    getForecast(city, country, key) {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&mode=json&appid=${key}`)
      .then(response => {
        this.buildForecast(response.data.list);
    })
    },
    buildForecast(forecasts) {
      this.today = new Date (forecasts[0].dt * 1000);
      forecasts.forEach((forecast) => {
        if (forecast.dt >= this.nextDay(0) && forecast.dt < this.nextDay(1)) {
          this.firstDayForecast.push(forecast);
        } else if (forecast.dt >= this.nextDay(1) && forecast.dt < this.nextDay(2)) {
          this.secondDayForecast.push(forecast);
        } else if (forecast.dt >= this.nextDay(2) && forecast.dt < this.nextDay(3)) {
          this.thirdDayForecast.push(forecast);
        } else if (forecast.dt >= this.nextDay(3) && forecast.dt < this.nextDay(4)) {
          this.fourthDayForecast.push(forecast);
        } else if (forecast.dt >= this.nextDay(4) && forecast.dt < this.nextDay(5)) {
          this.fifthDayForecast.push(forecast);
        } else if (forecast.dt >= this.nextDay(5)){
          this.sixthDayForecast.push(forecast);
        }
      })
      this.forecastWeather.push(this.firstDayForecast, this.secondDayForecast, this.thirdDayForecast, this.fourthDayForecast, this.fifthDayForecast, this.sixthDayForecast)
    }
  }
}

</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>