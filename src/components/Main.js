import React, {Component} from 'react';
import Header from './Header';
import {API_KEY} from "../api";
import MiniWeatherBox from './MiniWeatherBox';
import WeatherDetails from './WeatherDetails';
import './Main.css';

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            city: '',
            days: [],
        }
        this.fetchWeatherDetails = this.fetchWeatherDetails.bind(this);
    }

    fetchWeatherDetails(){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=delhi&APPID=6557810176c36fac5f0db536711a6c52`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            
        })
        .catch(err => {
            console.log(err);
        });
    }

    updateState = (data) => {
        let days = [];
        for(let i=0;i<5;i++){
            days.push({
                temp: data.list[8*i].main.temp,
                date: data.list[8*i].dt_txt,
                weather_main: data.list[8*i].weather[0].main,
                weather_desc: data.list[8*i].weather[0].description,
                pressure: data.list[8*i].main.pressure,
                wind_speed: data.list[8*i].wind.speed,
                humidity: data.list[8*i].main.humidity,
                icon: data.list[8*i].weather[0].icon,
            });
        }
        this.setState({
            ...this.state,
            city: data.city.name,
            days: days,
        });
    }
    makeApiCall = async (city) => {        
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.updateState(response);
        })
        .catch(err => {
            console.log(err);
            return false;
        });
    }
    
    render(){

        const MiniWeatherBoxes = () => {
            const weatherBoxes = this.state.days.slice(1).map(day => (
              <li key={day.date} className="weather-box">
                <MiniWeatherBox weather={day} />
              </li>
            ));
      
            return <ul className='weather-box-list'>{weatherBoxes}</ul>;
        };

        return (
            <div className=" main">
                <Header makeApiCall={this.makeApiCall} />
                <WeatherDetails weather={this.state.days[0]} city={this.state.city} />
                <MiniWeatherBoxes />
            </div>
        );
    }
}

export default Main;