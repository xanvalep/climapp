const axios = require('axios');
console.log('prueba node');


let apiKey= 'ingresar Key';
let city = 'Bogota, col';

let requestconfig = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,

}

let objPromise = axios(requestconfig);

objPromise.then((response)=>{console.log(response.data.main.temp -273.15 );}).catch((err)=>{console.log(err);});