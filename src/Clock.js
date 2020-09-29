import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    state = {
        time: new Date()
      };
      componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          time: new Date()
        });
      }
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock; 