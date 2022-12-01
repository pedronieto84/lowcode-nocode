// Cargo todo el objeto json dentro de la variable meteoJson
const meteoJson = require('./meteo.json')

// Cargo el objeto current_weather dentro de la variable finalData
const finalData = meteoJson.current_weather

// Logueo la variable current weather
console.log('data a terrassa', finalData)