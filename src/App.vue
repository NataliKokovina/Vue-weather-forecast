<template>
  <div id="app">
    <City @submit='getForecast'/>
    <Forecast v-if="forecastWeather" :forecastWeather="forecastWeather" />
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
      forecastWeather: null,
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
        this.buildForecast(response.data.list)
      })
    },

    buildForecast (forecasts) {
      this.forecastWeather = [];
      this.today = new Date (forecasts[0].dt * 1000);
      for (let i = 0; i <= 5; i++) {
        let forecastDay = [];
          forecasts.forEach((forecast) => {
          if (forecast.dt >= this.nextDay(i) && forecast.dt < this.nextDay(i + 1)) {
            forecastDay.push(forecast)
          }
        })
      this.forecastWeather.push(forecastDay)
      }
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