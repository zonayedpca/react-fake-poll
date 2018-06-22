import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IntroArea from './Components/IntroArea';
import ContentArea from './Components/ContentArea';
import ResultArea from './Components/ResultArea';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    let allData = [...this.state.allData, data];
    this.setState({allData});
  }

  render() {
    return (
      <Router basename="/react-fake-poll">
        <div className="app">
          <Route exact path="*" render={(props) => <IntroArea {...props} totalItems={this.state.allData.length} />} />
          <Route exact path="/" render={() => <ContentArea handleData={this.handleData} />} />
          <Route exact path="/results" render={() => <ResultArea answers={this.state.allData} handleData={this.handleData} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
