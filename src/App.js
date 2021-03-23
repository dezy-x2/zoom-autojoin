import logo from './logo.svg';
import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      dayOfWeek: "",
      hour: "",
      minute: "",
      ampm: ""
    }
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleDayOfWeekChange = this.handleDayOfWeekChange.bind(this);
    this.handleHour = this.handleHour.bind(this);
    this.handleMinute = this.handleMinute.bind(this);
    this.handleAmPm = this.handleAmPm.bind(this);
    this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }

  handleLinkChange = (event) => {
    this.setState({link: event.target.value})
  }

  handleLinkClick = () => {
    window.open(this.state.link, "_blank")
  }

  handleDayOfWeekChange = (event) => {
    this.setState({dayOfWeek: event.target.value})
  }

  handleHour = (event) => {
    this.setState({hour: event.target.value})
  }

  handleMinute = (event) => {
    this.setState({minute: event.target.value})
  }

  handleAmPm = (event) => {
    this.setState({ampm: event.target.value})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">

        <input type="text" placeholder="Hour" value={this.state.hour} onChange={this.handleHour} />

        <input type="text" placeholder="Minutes" value={this.state.minute} onChange={this.handleMinute} />

        <select value={this.state.ampm} onChange={this.handleAmPm} >
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>

        <select value={this.state.dayOfWeek} onChange={this.handleDayOfWeekChange} >

          {this.daysOfWeek.map(day => {
            return <option value={day}> {day} </option>
          })}

        </select>

        <input type="text" placeholder="Zoom link here" value={this.state.link} onChange={this.handleLinkChange} />

        <button onClick={this.handleLinkClick} >Open Link</button>

      </header>
    </div>
    )
  }
}

export default App;
