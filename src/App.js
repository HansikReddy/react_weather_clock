import React, {Component}from 'react';
import WeatherFetch from './WeatherFetch.js'




import './App.css';

function App() {
  return (
    <div>
      <WeatherFetch/>
      <Clock/>
      
    </div>
  );
}
class Clock extends Component {
  state = {
    time: new Date()
  };
  render() {
    return (
      <div>
        <h1>Clock {this.state.time.toLocaleTimeString()}</h1>
        
      </div>
    );
  }
}


export default App;
