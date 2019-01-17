import React, { Component } from 'react';
import './App.css'
import { Button, Row, Col } from 'reactstrap'

class App extends Component {
  state = {
    clickerValue: 0
  }

  incrementClicker = () => {
    this.setState((prevState) => ({clickerValue: prevState.clickerValue + 1}))
  }

  decrementClicker = () => {
    this.setState((prevState) => ({clickerValue: prevState.clickerValue - 1}))
  }

  resetClicker = () => {
    this.setState((prevState) => ({clickerValue: 0}))
  }

  render() {
    return (
      <div className="clicker-container">
        <Row>
          <Col sm={{ size: 3, offset: 4}}>
            <div className="jumbotron">
              <h1>
                <center>
                  {this.state.clickerValue}
                </center>
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 4 }}>
            <Button onClick={this.incrementClicker} color="success">Add</Button> 
          </Col>
          &nbsp; 
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Button onClick={this.decrementClicker} color="danger">Reduce</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={{ size: 1, offset: 5 }}>
            <Button onClick={this.resetClicker} color="warning">Reset</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
