module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-weather-forecast/dist/'
    : '/'
}