import React,{ Component } from 'react';
import { Link } from "react-router-dom"

class Timer extends Component {
  constructor(){
    super()
    this.state={time:new Date()}
  }
  currentTime()
  {
    this.setState({
      time:new Date()
    })
  }
  componentWillMount()
  {
    setInterval(()=>this.currentTime(),1000)
  }
  render(){
    return(
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: 25}}>
            <div><h1><Link to="/home">back</Link></h1></div>
            <h1>Time is {this.state.time.toLocaleTimeString()} </h1>
            <h1><Link to="/data">Next</Link></h1>

      </div>
    );
  }
}
export default Timer;
