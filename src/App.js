import React ,{useState} from "react";
import axios from "axios";
import Background from './assets/Background.png';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=19e96cb5ae3115980107234daa862bbf`;
  
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="text-center w-full h-full   ">
      <div className="w-full h-full object-cover opacity-[70%] absolute z-[-1] ">
      <img src={Background} className='' />
      </div>

      <div className="py-5">
        <input 
        className="w-[200px] h-[40px] justify-center items-center flex bg-slate-500 rounded-lg text-center m-auto "
        value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"  />
      </div>
      
      <div className="w-full h-full text-white font-bold relative py-9 drop-shadow-lg  bg-black/5 p-5  items-center">
        <div className="">
          <p>{data.name}</p>
        </div>
        <div className="text-6xl font-extrabold opacity-[80%]">
          {data.main ? <h1>{data.main.temp}°F</h1>:null}
        </div>
        <div className="text-xl left-[45%] rotate-[270deg] relative ">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      <div className="max-w-[450px] max-h-[300px] text-white font-bold text-center py-9 flex items-center top-72 justify-between px-9 bg-gray-500/20 rounded-xl m-9 ">
        <div >
          <p className="bg-slate-500/60 rounded-full p-1.5 drop-shadow-lg hover:bg-slate-300 cursor-pointer">
          {data.main ? <p>{data.main.feels_like.toFixed()}</p> : null}°F</p>
          <p>feels like</p>
        </div>
        <div>
          <p className="bg-slate-500/60 rounded-full p-1.5 drop-shadow-lg hover:bg-slate-300 cursor-pointer">{data.wind ? <p className='bold'>
            {data.wind.speed.toFixed()} MPH</p> : null} </p>
          <p>wind speed</p>
        </div>
        <div >
          <p className="bg-slate-500/60 rounded-full p-1.5 drop-shadow-lg hover:bg-slate-300 cursor-pointer">{data.main ? <p className='bold'>
            {data.main.humidity}%</p> : null}</p>
          <p>humidity</p>
        </div>
      </div>
    </div>
  );
}

export default App;
