<template>
<div>
  <h2 class="block__headline">Forecast</h2>
    <div class="block">
    <ul class="block__elem-wrap">
      <li class="block__elem" v-for="(day, index) in forecastWeather" :key="index">
        <ul class="block__elem" v-if="day.length !==0">
          <h3 class="block__title">{{ formatData(day[0].dt_txt)}}</h3> 
          <li class="block__item" v-for="(weather, index) in day" :key="index">
            <h4 class="block__date">{{ constructForecast(weather) }}</h4>
            <div class="block__weather">{{ weather.weather[0].main }}</div>
            <div class="block__temp">{{ "min " + weather.main.temp_min+"℃, " + "max " + weather.main.temp_max + "℃"}}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Forecast',
  props: {
    forecastWeather: Array,
  },
  
  methods: {
    formatData(date){
      return new Date(date).toLocaleDateString('uk-UA')
    },

    constructForecast(weather) {
      let day = new Date (weather.dt_txt).toLocaleTimeString('uk-UA').slice(0, 5)
      return day
    }
  }
}
</script>

<style scoped>
.block__headline {
  color: #615f5f;
  font-size: 36px;
  margin: 0 auto;
  margin-top: 15px;
}

.block {
  display: flex;
  margin: 0 7%;
}

.block__elem-wrap {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.block__elem {
  width: 80%;
  list-style: none
}

.block__title {
  color: #045050;
}

.block__item {
  border: 1px solid #c0bebe
}

.block__date {
  margin: 0;
  padding: 5px;
  color: #615f5f;
  background-color: #7fffd4a1
}

.block__weather {
  color: #045050;
  font-style: italic;
}

</style>