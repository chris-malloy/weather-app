# Weather App

This React app fetchs weather data from an API to display for the user.  It offers could practice for Redux state management with async requests.

***

[Installation](https://github.com/chris-malloy/weather-app#installation) | [Testing](https://github.com/chris-malloy/weather-app#testing) | [Challenges and Solutions](https://github.com/chris-malloy/weather-app#challenges-and-solutions) | [Code Snippets](https://github.com/chris-malloy/weather-app#code-snippets) | [Acknowledgements](https://github.com/chris-malloy/weather-app#acknowledgements)

***

## Installation

OS X & Linux:

```sh
npm install
```

## Testing

Snapshot testing is done with Jest which ships with React, but you can run the following command if you don't have it for some reason.

```sh
npm install --save-dev jest babel-jest babel-preset-env babel-preset-react react-test-renderer
```

Assertion testing for components and containers is done with Enzyme.

```sh
npm install --save-dev enzyme
npm install --save-dev enzyme-adapter-react-16
```

### Challenges and Solutions

Here are some of challenges I encountered along the way and how I went about solving them.

Originally the process to instantiate a new map followed like so:

```javascript
new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
```

However, the react-maps node module must have changed because this is now deprecated and the console was return with "google not defined."  After some googling to find out if this was a common bug, I found that google will be attached to the window after including it in your HTML file, and simple re-writing your code like so will help you access the google object and fix the error:

```javascript
new window.google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
```

This was a furstrating challenge at first because the code base I was working off of utilized the old code, which means it clearly worked at some point.  The lesson to take care when relying on old code bases to learn (one or more years might be too old!) and always understand each and every line of code instead blindly copying it into your code base.

### Code Snippets

One of the main practice points of this project was handling an AJAX request inside of an action creator.  This is a very common process in Redux apps that make async requests.

```javascript
export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
```

### Acknowledgements

Stephen Grider, thank you for the lesson.  It was a great way refined my knowledge of redux.
