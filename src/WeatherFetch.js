import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = '77c341c35bc2196f890787a5fc891f3a';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [location, setLocation] = useState('');
    
    useEffect(()=> {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=12.98&lon=77.6&appid='+key+'&units=imperial')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setFeelsLike(data.main.feels_like);
    setMainTemp(data.main.temp);
    setDescription(data.weather[0].description);
    setMain(data.weather[0].main);
    setLocation(data.name);
    
    
  })
},[])
return (
    <>
    <h1>Main Temperature :{mainTemp} Degrees Celsius</h1>
    <h1>Feels like: {feels_like} Degrees Celsius</h1>
    <h1>Weather parameter:{main}</h1>
    <h1>Description : {description}</h1>
    <h1>Location: {location}</h1>

    </>
)
}
export default WeatherFetch;