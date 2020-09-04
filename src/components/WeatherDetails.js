import React from 'react';
import { baseUrlImage } from '../api';

const WeatherDetails = (props) => {
    if(props.weather){
        return (
            <div className="col-12 p-3">
                <div className="card col-10 col-md-6 mx-auto">
                    <div className="card-body">
                        <h2>
                            Today, {props.city}
                        </h2>
                        <h2>
                            <img src={baseUrlImage + props.weather.icon + '@4x.png'} alt="background" />
                            {props.weather.weather_main}, 
                        </h2>
                        <ul>
                            <li>{props.weather.weather_main}</li>
                            <li>Temperature : {Math.round(props.weather.temp - 273.15)}°C</li>
                            <li>Pressure : {props.weather.pressure}</li>
                            <li>Humidity : {props.weather.humidity}</li>
                            <li>Wind-speed : {props.weather.wind_speed}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div>

            </div>
        );
    }
}

export default WeatherDetails;