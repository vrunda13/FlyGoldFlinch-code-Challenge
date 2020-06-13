import React ,{ Component } from 'react';

import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import * as ReactBootStrap from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  render(){
    return(
      <React.Fragment>
        <div className="Home">
         <ReactBootStrap.Navbar className="justify-content-center" expand="lg" bg="primary" variant="dark">
           <ReactBootStrap.Navbar.Brand href="#">Simple counter</ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Navbar>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: 15}}>
            <Button style={{height: '100px',width : '150px',fontSize: 50 }} variant="success" onClick={this.IncrementItem}>+</Button>
            <Button style={{height: '100px',width : '150px',fontSize: 50 }} variant="warning" onClick={this.DecreaseItem}>-</Button>
            { this.state.show ? <h1>{ this.state.clicks }</h1> : '' }
            <br />
            <div style={{display: "flex",justifyContent: "bottom",alignItems: "bottom"}}>
                <h1><Link to="/time">Next</Link></h1></div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
