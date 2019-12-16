<template>
  <div>
    <h1 class="title">City to search</h1>
    <form class="form" @submit.prevent="onSubmit" >
      <label class="form__label" for="city">City</label>
      <input class="form__input" type="text" id="city" v-model="city">
      <label class="form__label" for="country">Country</label>
      <input class="form__input" type="text" id="country" v-model="country">
      <button class="form__button" type="submit">Show weather</button>
    </form>  

  </div>
</template>

<script>

export default {
  name: 'City',
  data(){
    return {
      city: 'Cherkasy',
      country: 'ua',
      key: '08b499ef44f419de9586960e07e2f60d',
      inf: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.city, this.country, this.key);
    }
  }
}
</script>

<style scoped>
.title {
  color:#045050;
}

.form__label{
  color:#045050;
  font-size: 20px;
  font-weight: bold;
}

.form__input {
  border: 1px solid #c0bebe;
  height: 30px;
  margin: 10px
}

.form__button {
  background-color: #7fffd4a1;
  border: none;
  color: #615f5f;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>
