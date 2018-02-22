import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/Map';

export class WeatherList extends Component {
    renderWeather(cityData){
        const id = cityData.city.id
        const cname = cityData.city.name
        const ctemps = cityData.list.map(weather => weather.main.temp)
        const cpressures = cityData.list.map(weather => weather.main.pressure)
        const chumidities = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={id}>
                <td>{cname}</td>
                <td><Chart data={ctemps} color="orange" units="K" /></td>
                <td><Chart data={cpressures} color="red" units="hPa" /></td>
                <td><Chart data={chumidities} color="blue" units="%" /></td>
            </tr>
        )
    }

    render() {
        var weatherData;
        if(this.props.weather === undefined){
            weatherData = [];
        } else {
            weatherData = this.props.weather.map(this.renderWeather)
        }

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);

// TODO
// find out way to handle user error city search

