import React from 'react';
import { baseUrlImage } from '../api';

const getDay = (date) => {
    let weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    return weekdays[new Date(date).getDay()];
};

const MiniWeatherBox = (props) => {
    
    if(props.weather){
        return (
            <div className="">
                <h2>
                    {getDay(props.weather.date)}
                </h2>
                <h2>
                    <img src={baseUrlImage + props.weather.icon + '@2x.png'} alt="icon" />
                </h2>
                {Math.round(props.weather.temp - 273.15)}°C
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }

}

export default MiniWeatherBox;