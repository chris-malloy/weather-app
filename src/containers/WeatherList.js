import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Sparklines, SparklinesLine } from 'react-sparklines'

export class WeatherList extends Component {
    renderWeather(cityData){
        const id = cityData.city.id
        const cname = cityData.city.name
        const ctemps = cityData.list.map(weather => weather.main.temp)
        return (
            <tr key={id}>
                <td>{cname}</td>
                
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

